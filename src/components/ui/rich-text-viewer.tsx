import DOMPurify from 'dompurify';
import { cn } from '@/lib/utils';

interface RichTextViewerProps {
  content: string;
  className?: string;
}

/**
 * Safely renders HTML content with XSS sanitization
 * Uses DOMPurify to sanitize HTML before rendering
 */
export function RichTextViewer({ content, className }: RichTextViewerProps) {
  // Return null for empty content
  if (!content || content.trim() === '' || content === '<p></p>') {
    return null;
  }

  // Sanitize HTML to prevent XSS attacks
  const sanitizedContent = DOMPurify.sanitize(content, {
    ALLOWED_TAGS: [
      'p', 'br', 'strong', 'b', 'em', 'i', 'u', 's', 'strike',
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'ul', 'ol', 'li',
      'a', 'blockquote', 'code', 'pre',
      'span', 'div'
    ],
    ALLOWED_ATTR: ['href', 'target', 'rel', 'class'],
    ADD_ATTR: ['target'], // Allow target attribute for links
  });

  // Add target="_blank" and rel="noopener noreferrer" to all links for security
  const processedContent = sanitizedContent.replace(
    /<a\s+href=/g,
    '<a target="_blank" rel="noopener noreferrer" href='
  );

  return (
    <div 
      className={cn(
        // Rich text prose styling
        'prose prose-sm max-w-none',
        'prose-headings:font-semibold prose-headings:text-foreground',
        'prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg',
        'prose-p:text-foreground prose-p:leading-relaxed',
        'prose-a:text-primary prose-a:underline hover:prose-a:text-primary/80',
        'prose-ul:list-disc prose-ol:list-decimal',
        'prose-li:text-foreground prose-li:marker:text-muted-foreground',
        'prose-strong:font-semibold prose-strong:text-foreground',
        'prose-blockquote:border-l-4 prose-blockquote:border-primary/30 prose-blockquote:pl-4 prose-blockquote:italic',
        className
      )}
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  );
}

export default RichTextViewer;
