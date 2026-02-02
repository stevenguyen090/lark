import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const AdminCaseStudyForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  return (
    <div className="min-h-screen bg-secondary/30 p-6">
      <div className="container-content">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/admin')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Quay lại Dashboard
        </Button>
        
        <div className="bg-card rounded-xl border border-border p-8">
          <h1 className="text-2xl font-bold mb-6">
            {isEditing ? 'Chỉnh sửa Case Study' : 'Tạo Case Study mới'}
          </h1>
          
          <p className="text-muted-foreground">
            Form đang được phát triển. Vui lòng sử dụng CMS để quản lý nội dung.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminCaseStudyForm;
