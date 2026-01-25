import { FileText, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Attachment {
  type: string;
  url: string;
  caption: string;
}

interface AttachmentGalleryProps {
  attachments: Attachment[];
  className?: string;
}

/**
 * Renders case study attachments (images and files)
 * Images are displayed inline with captions
 * Files show as download links
 */
export function AttachmentGallery({ attachments, className }: AttachmentGalleryProps) {
  if (!attachments || attachments.length === 0) {
    return null;
  }

  const getFileExtension = (url: string): string => {
    try {
      const pathname = new URL(url).pathname;
      const ext = pathname.split('.').pop()?.toLowerCase() || '';
      return ext;
    } catch {
      return url.split('.').pop()?.toLowerCase() || '';
    }
  };

  const getFileName = (url: string): string => {
    try {
      const pathname = new URL(url).pathname;
      return pathname.split('/').pop() || 'File';
    } catch {
      return url.split('/').pop() || 'File';
    }
  };

  return (
    <div className={className}>
      <div className="space-y-6">
        {attachments.map((attachment, index) => (
          <div key={index} className="space-y-2">
            {attachment.type === 'image' ? (
              // Image attachment
              <figure className="rounded-xl overflow-hidden border border-border bg-muted/20">
                <img
                  src={attachment.url}
                  alt={attachment.caption || `Hình ảnh ${index + 1}`}
                  className="w-full h-auto object-contain max-h-[500px]"
                  loading="lazy"
                />
                {attachment.caption && (
                  <figcaption className="text-sm text-muted-foreground text-center py-3 px-4 border-t border-border bg-muted/30">
                    {attachment.caption}
                  </figcaption>
                )}
              </figure>
            ) : (
              // File attachment
              <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-muted/20 hover:bg-muted/40 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground truncate">
                    {attachment.caption || getFileName(attachment.url)}
                  </p>
                  <p className="text-sm text-muted-foreground uppercase">
                    {getFileExtension(attachment.url)} file
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                  >
                    <a
                      href={attachment.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Xem
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                  >
                    <a
                      href={attachment.url}
                      download
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Tải
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AttachmentGallery;
