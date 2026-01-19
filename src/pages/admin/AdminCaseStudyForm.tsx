import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  useCaseStudyById, 
  useCreateCaseStudy, 
  useUpdateCaseStudy,
  uploadAttachment 
} from '@/hooks/useCaseStudies';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { 
  ArrowLeft, 
  Save, 
  Eye, 
  Plus, 
  Trash2, 
  Upload,
  Loader2 
} from 'lucide-react';
import { industryOptions, scaleOptions, problemOptions } from '@/data/caseStudies';

interface FormData {
  slug: string;
  industry: string;
  industryLabel: string;
  scale: string;
  scaleLabel: string;
  mainProblem: string;
  mainProblemLabel: string;
  title: string;
  summary: string;
  context: {
    businessType: string;
    industry: string;
    scale: string;
    situation: string;
  };
  painPoints: string[];
  previousAttempts: string[];
  previousAttemptsResult: string;
  rootCauses: { title: string; description: string; consequence: string }[];
  solution: {
    description: string;
    approach: string;
    steps: { title: string; description: string }[];
    dailyChanges: { before: string; after: string };
    attachments: { type: string; url: string; caption: string }[];
  };
  results: { metric: string; value: string; description: string }[];
  keyInsight: string;
  suitableFor: string[];
  notSuitableFor: string[];
  ctaQuestion: string;
  status: string;
}

const initialFormData: FormData = {
  slug: '',
  industry: '',
  industryLabel: '',
  scale: '',
  scaleLabel: '',
  mainProblem: '',
  mainProblemLabel: '',
  title: '',
  summary: '',
  context: { businessType: '', industry: '', scale: '', situation: '' },
  painPoints: [''],
  previousAttempts: [''],
  previousAttemptsResult: '',
  rootCauses: [{ title: '', description: '', consequence: '' }],
  solution: {
    description: '',
    approach: '',
    steps: [{ title: '', description: '' }],
    dailyChanges: { before: '', after: '' },
    attachments: [],
  },
  results: [{ metric: '', value: '', description: '' }],
  keyInsight: '',
  suitableFor: [''],
  notSuitableFor: [''],
  ctaQuestion: 'Bạn có đang giống trường hợp này?',
  status: 'draft',
};

export default function AdminCaseStudyForm() {
  const { id } = useParams();
  const isEditing = !!id;
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isUploading, setIsUploading] = useState(false);

  const { data: existingData, isLoading: isLoadingData } = useCaseStudyById(id);
  const createMutation = useCreateCaseStudy();
  const updateMutation = useUpdateCaseStudy();

  useEffect(() => {
    if (existingData && isEditing) {
      setFormData({
        slug: existingData.slug,
        industry: existingData.industry,
        industryLabel: existingData.industryLabel,
        scale: existingData.scale,
        scaleLabel: existingData.scaleLabel,
        mainProblem: existingData.mainProblem,
        mainProblemLabel: existingData.mainProblemLabel,
        title: existingData.title,
        summary: existingData.summary,
        context: existingData.context,
        painPoints: existingData.painPoints.length > 0 ? existingData.painPoints : [''],
        previousAttempts: existingData.previousAttempts.length > 0 ? existingData.previousAttempts : [''],
        previousAttemptsResult: existingData.previousAttemptsResult,
        rootCauses: existingData.rootCauses.length > 0 ? existingData.rootCauses : [{ title: '', description: '', consequence: '' }],
        solution: {
          description: existingData.solution.description || '',
          approach: existingData.solution.approach,
          steps: existingData.solution.steps.length > 0 ? existingData.solution.steps : [{ title: '', description: '' }],
          dailyChanges: existingData.solution.dailyChanges,
          attachments: existingData.solution.attachments || [],
        },
        results: existingData.results.length > 0 ? existingData.results : [{ metric: '', value: '', description: '' }],
        keyInsight: existingData.keyInsight,
        suitableFor: existingData.suitableFor.length > 0 ? existingData.suitableFor : [''],
        notSuitableFor: existingData.notSuitableFor.length > 0 ? existingData.notSuitableFor : [''],
        ctaQuestion: existingData.ctaQuestion,
        status: existingData.status,
      });
    }
  }, [existingData, isEditing]);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleTitleChange = (title: string) => {
    setFormData(prev => ({
      ...prev,
      title,
      slug: prev.slug || generateSlug(title),
    }));
  };

  const handleIndustryChange = (value: string) => {
    const option = industryOptions.find(o => o.value === value);
    setFormData(prev => ({
      ...prev,
      industry: value,
      industryLabel: option?.label || '',
    }));
  };

  const handleScaleChange = (value: string) => {
    const option = scaleOptions.find(o => o.value === value);
    setFormData(prev => ({
      ...prev,
      scale: value,
      scaleLabel: option?.label || '',
    }));
  };

  const handleProblemChange = (value: string) => {
    const option = problemOptions.find(o => o.value === value);
    setFormData(prev => ({
      ...prev,
      mainProblem: value,
      mainProblemLabel: option?.label || '',
    }));
  };

  const handleArrayAdd = (field: keyof FormData) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...(prev[field] as string[]), ''],
    }));
  };

  const handleArrayRemove = (field: keyof FormData, index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] as string[]).filter((_, i) => i !== index),
    }));
  };

  const handleArrayChange = (field: keyof FormData, index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] as string[]).map((item, i) => i === index ? value : item),
    }));
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    try {
      const file = files[0];
      const url = await uploadAttachment(file);
      
      setFormData(prev => ({
        ...prev,
        solution: {
          ...prev.solution,
          attachments: [
            ...prev.solution.attachments,
            { type: file.type.startsWith('image/') ? 'image' : 'file', url, caption: '' }
          ],
        },
      }));
      
      toast({
        title: 'Upload thành công',
        description: 'File đã được tải lên',
      });
    } catch (error) {
      toast({
        title: 'Lỗi upload',
        description: 'Không thể tải file lên',
        variant: 'destructive',
      });
    }
    setIsUploading(false);
  };

  const handleSubmit = async (status: string) => {
    // Validate required fields
    if (!formData.title || !formData.slug || !formData.industry || !formData.scale || !formData.mainProblem) {
      toast({
        title: 'Thiếu thông tin',
        description: 'Vui lòng điền đầy đủ các trường bắt buộc',
        variant: 'destructive',
      });
      return;
    }

    const dataToSave = {
      slug: formData.slug,
      industry: formData.industry,
      industry_label: formData.industryLabel,
      scale: formData.scale,
      scale_label: formData.scaleLabel,
      main_problem: formData.mainProblem,
      main_problem_label: formData.mainProblemLabel,
      title: formData.title,
      summary: formData.summary,
      context: formData.context,
      pain_points: formData.painPoints.filter(p => p.trim()),
      previous_attempts: formData.previousAttempts.filter(p => p.trim()),
      previous_attempts_result: formData.previousAttemptsResult,
      root_causes: formData.rootCauses.filter(r => r.title.trim()),
      solution: {
        description: formData.solution.description,
        approach: formData.solution.approach,
        steps: formData.solution.steps.filter(s => s.title.trim()),
        dailyChanges: formData.solution.dailyChanges,
        attachments: formData.solution.attachments,
      },
      results: formData.results.filter(r => r.metric.trim()),
      key_insight: formData.keyInsight,
      suitable_for: formData.suitableFor.filter(s => s.trim()),
      not_suitable_for: formData.notSuitableFor.filter(s => s.trim()),
      cta_question: formData.ctaQuestion,
      status,
      updated_by: user?.id,
    };

    try {
      if (isEditing) {
        await updateMutation.mutateAsync({ id, data: dataToSave });
      } else {
        await createMutation.mutateAsync({ 
          ...dataToSave, 
          created_by: user?.id 
        });
      }
      
      toast({
        title: status === 'published' ? 'Đã xuất bản' : 'Đã lưu',
        description: `Bài viết đã được ${status === 'published' ? 'xuất bản' : 'lưu nháp'}`,
      });
      
      navigate('/admin');
    } catch (error: any) {
      toast({
        title: 'Lỗi',
        description: error.message || 'Không thể lưu bài viết',
        variant: 'destructive',
      });
    }
  };

  if (isEditing && isLoadingData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-10">
        <div className="container-content flex items-center justify-between h-16">
          <Button variant="ghost" onClick={() => navigate('/admin')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Quay lại
          </Button>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              onClick={() => handleSubmit('draft')}
              disabled={createMutation.isPending || updateMutation.isPending}
            >
              <Save className="h-4 w-4 mr-2" />
              Lưu nháp
            </Button>
            <Button 
              onClick={() => handleSubmit('published')}
              disabled={createMutation.isPending || updateMutation.isPending}
            >
              <Eye className="h-4 w-4 mr-2" />
              Xuất bản
            </Button>
          </div>
        </div>
      </header>

      {/* Form */}
      <main className="container-content py-8 max-w-4xl">
        <h1 className="text-2xl font-bold mb-8">
          {isEditing ? 'Chỉnh sửa Case Study' : 'Tạo Case Study mới'}
        </h1>

        <div className="space-y-6">
          {/* Basic Info */}
          <Card>
            <CardHeader>
              <CardTitle>Thông tin cơ bản</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Tiêu đề *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Vì sao chủ phòng tập lúc nào cũng bận?"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">Slug *</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                  placeholder="vi-sao-chu-phong-tap-luc-nao-cung-ban"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="summary">Tóm tắt</Label>
                <Textarea
                  id="summary"
                  value={formData.summary}
                  onChange={(e) => setFormData(prev => ({ ...prev, summary: e.target.value }))}
                  placeholder="Mô tả ngắn về case study..."
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Ngành *</Label>
                  <Select value={formData.industry} onValueChange={handleIndustryChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn ngành" />
                    </SelectTrigger>
                    <SelectContent>
                      {industryOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Quy mô *</Label>
                  <Select value={formData.scale} onValueChange={handleScaleChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn quy mô" />
                    </SelectTrigger>
                    <SelectContent>
                      {scaleOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Vấn đề chính *</Label>
                  <Select value={formData.mainProblem} onValueChange={handleProblemChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn vấn đề" />
                    </SelectTrigger>
                    <SelectContent>
                      {problemOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Context */}
          <Card>
            <CardHeader>
              <CardTitle>1. Bối cảnh doanh nghiệp</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Loại hình kinh doanh</Label>
                  <Input
                    value={formData.context.businessType}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      context: { ...prev.context, businessType: e.target.value }
                    }))}
                    placeholder="Phòng tập thể hình – yoga – PT"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Ngành nghề</Label>
                  <Input
                    value={formData.context.industry}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      context: { ...prev.context, industry: e.target.value }
                    }))}
                    placeholder="Fitness"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Quy mô</Label>
                  <Input
                    value={formData.context.scale}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      context: { ...prev.context, scale: e.target.value }
                    }))}
                    placeholder="10–30 nhân sự (PT, lễ tân, quản lý ca)"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Tình huống</Label>
                <Textarea
                  value={formData.context.situation}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    context: { ...prev.context, situation: e.target.value }
                  }))}
                  placeholder="Mô tả tình huống cụ thể của doanh nghiệp..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Pain Points */}
          <Card>
            <CardHeader>
              <CardTitle>2. Vấn đề quen thuộc (Pain Points)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {formData.painPoints.map((point, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={point}
                    onChange={(e) => handleArrayChange('painPoints', index, e.target.value)}
                    placeholder={`Vấn đề ${index + 1}...`}
                  />
                  {formData.painPoints.length > 1 && (
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => handleArrayRemove('painPoints', index)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  )}
                </div>
              ))}
              <Button variant="outline" onClick={() => handleArrayAdd('painPoints')}>
                <Plus className="h-4 w-4 mr-2" />
                Thêm vấn đề
              </Button>
            </CardContent>
          </Card>

          {/* Previous Attempts */}
          <Card>
            <CardHeader>
              <CardTitle>3. Họ đã từng thử gì</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {formData.previousAttempts.map((attempt, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={attempt}
                    onChange={(e) => handleArrayChange('previousAttempts', index, e.target.value)}
                    placeholder={`Giải pháp đã thử ${index + 1}...`}
                  />
                  {formData.previousAttempts.length > 1 && (
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => handleArrayRemove('previousAttempts', index)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  )}
                </div>
              ))}
              <Button variant="outline" onClick={() => handleArrayAdd('previousAttempts')}>
                <Plus className="h-4 w-4 mr-2" />
                Thêm
              </Button>
              <div className="space-y-2 mt-4">
                <Label>Kết quả của các giải pháp đã thử</Label>
                <Textarea
                  value={formData.previousAttemptsResult}
                  onChange={(e) => setFormData(prev => ({ ...prev, previousAttemptsResult: e.target.value }))}
                  placeholder="Mô tả kết quả không như mong đợi..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Root Causes */}
          <Card>
            <CardHeader>
              <CardTitle>4. Vấn đề gốc rễ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {formData.rootCauses.map((cause, index) => (
                <div key={index} className="p-4 border rounded-lg space-y-3">
                  <div className="flex justify-between items-center">
                    <Label>Nguyên nhân {index + 1}</Label>
                    {formData.rootCauses.length > 1 && (
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => {
                          setFormData(prev => ({
                            ...prev,
                            rootCauses: prev.rootCauses.filter((_, i) => i !== index)
                          }));
                        }}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    )}
                  </div>
                  <Input
                    value={cause.title}
                    onChange={(e) => {
                      const updated = [...formData.rootCauses];
                      updated[index] = { ...updated[index], title: e.target.value };
                      setFormData(prev => ({ ...prev, rootCauses: updated }));
                    }}
                    placeholder="Tiêu đề nguyên nhân"
                  />
                  <Textarea
                    value={cause.description}
                    onChange={(e) => {
                      const updated = [...formData.rootCauses];
                      updated[index] = { ...updated[index], description: e.target.value };
                      setFormData(prev => ({ ...prev, rootCauses: updated }));
                    }}
                    placeholder="Mô tả chi tiết"
                    rows={2}
                  />
                  <Input
                    value={cause.consequence}
                    onChange={(e) => {
                      const updated = [...formData.rootCauses];
                      updated[index] = { ...updated[index], consequence: e.target.value };
                      setFormData(prev => ({ ...prev, rootCauses: updated }));
                    }}
                    placeholder="Hậu quả"
                  />
                </div>
              ))}
              <Button 
                variant="outline" 
                onClick={() => {
                  setFormData(prev => ({
                    ...prev,
                    rootCauses: [...prev.rootCauses, { title: '', description: '', consequence: '' }]
                  }));
                }}
              >
                <Plus className="h-4 w-4 mr-2" />
                Thêm nguyên nhân
              </Button>
            </CardContent>
          </Card>

          {/* Solution */}
          <Card>
            <CardHeader>
              <CardTitle>5. Giải pháp triển khai</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Mô tả tổng quan giải pháp</Label>
                <Textarea
                  value={formData.solution.description}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    solution: { ...prev.solution, description: e.target.value }
                  }))}
                  placeholder="Giải thích tư duy giải pháp tổng thể..."
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label>Cách tiếp cận</Label>
                <Textarea
                  value={formData.solution.approach}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    solution: { ...prev.solution, approach: e.target.value }
                  }))}
                  placeholder="Lark Consult tiếp cận bài toán theo hướng..."
                  rows={2}
                />
              </div>

              {/* Steps */}
              <div className="space-y-3">
                <Label>Các bước triển khai</Label>
                {formData.solution.steps.map((step, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Bước {index + 1}</span>
                      {formData.solution.steps.length > 1 && (
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => {
                            setFormData(prev => ({
                              ...prev,
                              solution: {
                                ...prev.solution,
                                steps: prev.solution.steps.filter((_, i) => i !== index)
                              }
                            }));
                          }}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      )}
                    </div>
                    <Input
                      value={step.title}
                      onChange={(e) => {
                        const updated = [...formData.solution.steps];
                        updated[index] = { ...updated[index], title: e.target.value };
                        setFormData(prev => ({
                          ...prev,
                          solution: { ...prev.solution, steps: updated }
                        }));
                      }}
                      placeholder="Tiêu đề bước"
                    />
                    <Textarea
                      value={step.description}
                      onChange={(e) => {
                        const updated = [...formData.solution.steps];
                        updated[index] = { ...updated[index], description: e.target.value };
                        setFormData(prev => ({
                          ...prev,
                          solution: { ...prev.solution, steps: updated }
                        }));
                      }}
                      placeholder="Mô tả chi tiết"
                      rows={2}
                    />
                  </div>
                ))}
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setFormData(prev => ({
                      ...prev,
                      solution: {
                        ...prev.solution,
                        steps: [...prev.solution.steps, { title: '', description: '' }]
                      }
                    }));
                  }}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Thêm bước
                </Button>
              </div>

              {/* Daily Changes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Trước (Before)</Label>
                  <Textarea
                    value={formData.solution.dailyChanges.before}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      solution: {
                        ...prev.solution,
                        dailyChanges: { ...prev.solution.dailyChanges, before: e.target.value }
                      }
                    }))}
                    placeholder="Mô tả cách làm việc trước..."
                    rows={2}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Sau (After)</Label>
                  <Textarea
                    value={formData.solution.dailyChanges.after}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      solution: {
                        ...prev.solution,
                        dailyChanges: { ...prev.solution.dailyChanges, after: e.target.value }
                      }
                    }))}
                    placeholder="Mô tả cách làm việc sau..."
                    rows={2}
                  />
                </div>
              </div>

              {/* Attachments */}
              <div className="space-y-3">
                <Label>Đính kèm (Hình ảnh, Sơ đồ, Dashboard...)</Label>
                <div className="flex flex-wrap gap-4">
                  {formData.solution.attachments.map((att, index) => (
                    <div key={index} className="relative group">
                      {att.type === 'image' ? (
                        <img 
                          src={att.url} 
                          alt={att.caption} 
                          className="w-32 h-32 object-cover rounded-lg border"
                        />
                      ) : (
                        <div className="w-32 h-32 flex items-center justify-center bg-secondary rounded-lg border">
                          <span className="text-sm text-muted-foreground">File</span>
                        </div>
                      )}
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute -top-2 -right-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition"
                        onClick={() => {
                          setFormData(prev => ({
                            ...prev,
                            solution: {
                              ...prev.solution,
                              attachments: prev.solution.attachments.filter((_, i) => i !== index)
                            }
                          }));
                        }}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                  <label className="w-32 h-32 flex flex-col items-center justify-center border-2 border-dashed rounded-lg cursor-pointer hover:bg-secondary/50 transition">
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*,.pdf"
                      onChange={handleFileUpload}
                      disabled={isUploading}
                    />
                    {isUploading ? (
                      <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                    ) : (
                      <>
                        <Upload className="h-6 w-6 text-muted-foreground mb-2" />
                        <span className="text-xs text-muted-foreground">Upload</span>
                      </>
                    )}
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card>
            <CardHeader>
              <CardTitle>6. Kết quả đo được</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {formData.results.map((result, index) => (
                <div key={index} className="p-4 border rounded-lg space-y-3">
                  <div className="flex justify-between items-center">
                    <Label>Kết quả {index + 1}</Label>
                    {formData.results.length > 1 && (
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => {
                          setFormData(prev => ({
                            ...prev,
                            results: prev.results.filter((_, i) => i !== index)
                          }));
                        }}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <Input
                      value={result.metric}
                      onChange={(e) => {
                        const updated = [...formData.results];
                        updated[index] = { ...updated[index], metric: e.target.value };
                        setFormData(prev => ({ ...prev, results: updated }));
                      }}
                      placeholder="Chỉ số"
                    />
                    <Input
                      value={result.value}
                      onChange={(e) => {
                        const updated = [...formData.results];
                        updated[index] = { ...updated[index], value: e.target.value };
                        setFormData(prev => ({ ...prev, results: updated }));
                      }}
                      placeholder="Giá trị (30-40%)"
                    />
                    <Input
                      value={result.description}
                      onChange={(e) => {
                        const updated = [...formData.results];
                        updated[index] = { ...updated[index], description: e.target.value };
                        setFormData(prev => ({ ...prev, results: updated }));
                      }}
                      placeholder="Mô tả"
                    />
                  </div>
                </div>
              ))}
              <Button 
                variant="outline" 
                onClick={() => {
                  setFormData(prev => ({
                    ...prev,
                    results: [...prev.results, { metric: '', value: '', description: '' }]
                  }));
                }}
              >
                <Plus className="h-4 w-4 mr-2" />
                Thêm kết quả
              </Button>

              <div className="space-y-2 mt-4">
                <Label>Key Insight</Label>
                <Textarea
                  value={formData.keyInsight}
                  onChange={(e) => setFormData(prev => ({ ...prev, keyInsight: e.target.value }))}
                  placeholder="Bài học/insight quan trọng nhất..."
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>

          {/* Suitable For */}
          <Card>
            <CardHeader>
              <CardTitle>7. Phù hợp / Không phù hợp</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Label>Phù hợp cho</Label>
                {formData.suitableFor.map((item, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={item}
                      onChange={(e) => handleArrayChange('suitableFor', index, e.target.value)}
                      placeholder={`Đối tượng phù hợp ${index + 1}...`}
                    />
                    {formData.suitableFor.length > 1 && (
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => handleArrayRemove('suitableFor', index)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button variant="outline" onClick={() => handleArrayAdd('suitableFor')}>
                  <Plus className="h-4 w-4 mr-2" />
                  Thêm
                </Button>
              </div>

              <div className="space-y-3">
                <Label>Không phù hợp cho</Label>
                {formData.notSuitableFor.map((item, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={item}
                      onChange={(e) => handleArrayChange('notSuitableFor', index, e.target.value)}
                      placeholder={`Đối tượng không phù hợp ${index + 1}...`}
                    />
                    {formData.notSuitableFor.length > 1 && (
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => handleArrayRemove('notSuitableFor', index)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button variant="outline" onClick={() => handleArrayAdd('notSuitableFor')}>
                  <Plus className="h-4 w-4 mr-2" />
                  Thêm
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card>
            <CardHeader>
              <CardTitle>8. CTA</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label>Câu hỏi CTA</Label>
                <Input
                  value={formData.ctaQuestion}
                  onChange={(e) => setFormData(prev => ({ ...prev, ctaQuestion: e.target.value }))}
                  placeholder="Bạn có đang giống trường hợp này?"
                />
              </div>
            </CardContent>
          </Card>

          {/* Submit Buttons */}
          <div className="flex justify-end gap-4 pb-8">
            <Button 
              variant="outline" 
              onClick={() => handleSubmit('draft')}
              disabled={createMutation.isPending || updateMutation.isPending}
            >
              <Save className="h-4 w-4 mr-2" />
              Lưu nháp
            </Button>
            <Button 
              onClick={() => handleSubmit('published')}
              disabled={createMutation.isPending || updateMutation.isPending}
            >
              {(createMutation.isPending || updateMutation.isPending) ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Eye className="h-4 w-4 mr-2" />
              )}
              Xuất bản
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
