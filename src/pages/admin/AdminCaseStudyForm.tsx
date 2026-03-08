import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Plus, Trash2, Upload, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useCaseStudyById, useCreateCaseStudy, useUpdateCaseStudy, uploadAttachment } from '@/hooks/useCaseStudies';
import { RichTextEditor } from '@/components/ui/rich-text-editor';

interface FormValues {
  title: string;
  slug: string;
  summary: string;
  status: string;
  industry: string;
  industryLabel: string;
  scale: string;
  scaleLabel: string;
  mainProblem: string;
  mainProblemLabel: string;
  // Context
  contextBusinessType: string;
  contextIndustry: string;
  contextScale: string;
  contextSituation: string;
  // Pain points
  painPoints: { value: string }[];
  // Previous attempts
  previousAttempts: { value: string }[];
  previousAttemptsResult: string;
  // Root causes
  rootCauses: { title: string; description: string; consequence: string }[];
  // Solution
  solutionApproach: string;
  solutionDescription: string;
  solutionSteps: { title: string; description: string }[];
  dailyChangesBefore: string;
  dailyChangesAfter: string;
  // Results
  results: { metric: string; value: string; description: string }[];
  // Other
  keyInsight: string;
  ctaQuestion: string;
  suitableFor: { value: string }[];
  notSuitableFor: { value: string }[];
  // Attachments
  attachments: { type: string; url: string; caption: string }[];
}

const INDUSTRY_OPTIONS = [
  { value: 'retail', label: 'Bán lẻ' },
  { value: 'manufacturing', label: 'Sản xuất' },
  { value: 'service', label: 'Dịch vụ' },
  { value: 'fitness', label: 'Fitness' },
  { value: 'other', label: 'Khác' },
];

const SCALE_OPTIONS = [
  { value: 'under10', label: 'Dưới 10 người' },
  { value: '10to30', label: '10-30 người' },
  { value: '30to100', label: '30-100 người' },
  { value: 'over100', label: 'Trên 100 người' },
];

const PROBLEM_OPTIONS = [
  { value: 'task-management', label: 'Quản lý công việc' },
  { value: 'department-coordination', label: 'Phối hợp phòng ban' },
  { value: 'ceo-reporting', label: 'Báo cáo cho CEO' },
  { value: 'onboarding', label: 'Onboarding nhân sự' },
];

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

const AdminCaseStudyForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const { data: existingStudy, isLoading: isLoadingStudy } = useCaseStudyById(id);
  const createMutation = useCreateCaseStudy();
  const updateMutation = useUpdateCaseStudy();

  const [isUploading, setIsUploading] = useState(false);

  const { register, handleSubmit, control, setValue, watch, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({
    defaultValues: {
      title: '',
      slug: '',
      summary: '',
      status: 'draft',
      industry: 'retail',
      industryLabel: 'Bán lẻ',
      scale: 'under10',
      scaleLabel: 'Dưới 10 người',
      mainProblem: 'task-management',
      mainProblemLabel: 'Quản lý công việc',
      contextBusinessType: '',
      contextIndustry: '',
      contextScale: '',
      contextSituation: '',
      painPoints: [{ value: '' }],
      previousAttempts: [{ value: '' }],
      previousAttemptsResult: '',
      rootCauses: [{ title: '', description: '', consequence: '' }],
      solutionApproach: '',
      solutionDescription: '',
      solutionSteps: [{ title: '', description: '' }],
      dailyChangesBefore: '',
      dailyChangesAfter: '',
      results: [{ metric: '', value: '', description: '' }],
      keyInsight: '',
      ctaQuestion: '',
      suitableFor: [{ value: '' }],
      notSuitableFor: [{ value: '' }],
      attachments: [],
    },
  });

  const painPointsArray = useFieldArray({ control, name: 'painPoints' });
  const previousAttemptsArray = useFieldArray({ control, name: 'previousAttempts' });
  const rootCausesArray = useFieldArray({ control, name: 'rootCauses' });
  const solutionStepsArray = useFieldArray({ control, name: 'solutionSteps' });
  const resultsArray = useFieldArray({ control, name: 'results' });
  const suitableForArray = useFieldArray({ control, name: 'suitableFor' });
  const notSuitableForArray = useFieldArray({ control, name: 'notSuitableFor' });
  const attachmentsArray = useFieldArray({ control, name: 'attachments' });

  const watchTitle = watch('title');

  // Auto-generate slug from title
  useEffect(() => {
    if (!isEditing && watchTitle) {
      setValue('slug', generateSlug(watchTitle));
    }
  }, [watchTitle, isEditing, setValue]);

  // Populate form when editing
  useEffect(() => {
    if (existingStudy && isEditing) {
      reset({
        title: existingStudy.title,
        slug: existingStudy.slug,
        summary: existingStudy.summary,
        status: existingStudy.status,
        industry: existingStudy.industry,
        industryLabel: existingStudy.industryLabel,
        scale: existingStudy.scale,
        scaleLabel: existingStudy.scaleLabel,
        mainProblem: existingStudy.mainProblem,
        mainProblemLabel: existingStudy.mainProblemLabel,
        contextBusinessType: existingStudy.context?.businessType || '',
        contextIndustry: existingStudy.context?.industry || '',
        contextScale: existingStudy.context?.scale || '',
        contextSituation: existingStudy.context?.situation || '',
        painPoints: (existingStudy.painPoints?.length ? existingStudy.painPoints : ['']).map((v: string) => ({ value: v })),
        previousAttempts: (existingStudy.previousAttempts?.length ? existingStudy.previousAttempts : ['']).map((v: string) => ({ value: v })),
        previousAttemptsResult: existingStudy.previousAttemptsResult || '',
        rootCauses: existingStudy.rootCauses?.length ? existingStudy.rootCauses : [{ title: '', description: '', consequence: '' }],
        solutionApproach: existingStudy.solution?.approach || '',
        solutionDescription: existingStudy.solution?.description || '',
        solutionSteps: existingStudy.solution?.steps?.length ? existingStudy.solution.steps : [{ title: '', description: '' }],
        dailyChangesBefore: existingStudy.solution?.dailyChanges?.before || '',
        dailyChangesAfter: existingStudy.solution?.dailyChanges?.after || '',
        results: existingStudy.results?.length ? existingStudy.results : [{ metric: '', value: '', description: '' }],
        keyInsight: existingStudy.keyInsight || '',
        ctaQuestion: existingStudy.ctaQuestion || '',
        suitableFor: (existingStudy.suitableFor?.length ? existingStudy.suitableFor : ['']).map((v: string) => ({ value: v })),
        notSuitableFor: (existingStudy.notSuitableFor?.length ? existingStudy.notSuitableFor : ['']).map((v: string) => ({ value: v })),
        attachments: existingStudy.solution?.attachments || [],
      });
    }
  }, [existingStudy, isEditing, reset]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files?.length) return;

    setIsUploading(true);
    try {
      for (const file of Array.from(files)) {
        const url = await uploadAttachment(file);
        const isImage = file.type.startsWith('image/');
        attachmentsArray.append({
          type: isImage ? 'image' : 'file',
          url,
          caption: file.name,
        });
      }
      toast({ title: 'Upload thành công' });
    } catch (err) {
      toast({ title: 'Upload thất bại', description: String(err), variant: 'destructive' });
    } finally {
      setIsUploading(false);
      e.target.value = '';
    }
  };

  const onSubmit = async (formData: FormValues) => {
    const dbData = {
      title: formData.title,
      slug: formData.slug,
      summary: formData.summary,
      status: formData.status,
      industry: formData.industry,
      industry_label: formData.industryLabel,
      scale: formData.scale,
      scale_label: formData.scaleLabel,
      main_problem: formData.mainProblem,
      main_problem_label: formData.mainProblemLabel,
      context: {
        businessType: formData.contextBusinessType,
        industry: formData.contextIndustry,
        scale: formData.contextScale,
        situation: formData.contextSituation,
      },
      pain_points: formData.painPoints.map(p => p.value).filter(Boolean),
      previous_attempts: formData.previousAttempts.map(p => p.value).filter(Boolean),
      previous_attempts_result: formData.previousAttemptsResult,
      root_causes: formData.rootCauses.filter(r => r.title),
      solution: {
        description: formData.solutionDescription,
        approach: formData.solutionApproach,
        steps: formData.solutionSteps.filter(s => s.title),
        dailyChanges: {
          before: formData.dailyChangesBefore,
          after: formData.dailyChangesAfter,
        },
        attachments: formData.attachments,
      },
      results: formData.results.filter(r => r.metric),
      key_insight: formData.keyInsight,
      cta_question: formData.ctaQuestion,
      suitable_for: formData.suitableFor.map(s => s.value).filter(Boolean),
      not_suitable_for: formData.notSuitableFor.map(s => s.value).filter(Boolean),
    };

    try {
      if (isEditing && id) {
        await updateMutation.mutateAsync({ id, data: dbData });
        toast({ title: 'Cập nhật thành công!' });
      } else {
        await createMutation.mutateAsync(dbData);
        toast({ title: 'Tạo case study thành công!' });
      }
      navigate('/admin');
    } catch (err: any) {
      toast({ title: 'Lỗi', description: err.message, variant: 'destructive' });
    }
  };

  if (isEditing && isLoadingStudy) {
    return (
      <div className="min-h-screen bg-secondary/30 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary/30 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <Button variant="ghost" onClick={() => navigate('/admin')} className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Quay lại Dashboard
        </Button>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Header */}
          <Card>
            <CardHeader>
              <CardTitle>{isEditing ? 'Chỉnh sửa Case Study' : 'Tạo Case Study mới'}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Tiêu đề *</Label>
                  <Input {...register('title', { required: true })} placeholder="Tiêu đề case study" />
                </div>
                <div className="space-y-2">
                  <Label>Slug</Label>
                  <Input {...register('slug', { required: true })} placeholder="url-slug" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Tóm tắt *</Label>
                <Textarea {...register('summary', { required: true })} placeholder="Mô tả ngắn..." rows={3} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label>Trạng thái</Label>
                  <Select value={watch('status')} onValueChange={v => setValue('status', v)}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Nháp</SelectItem>
                      <SelectItem value="published">Đã xuất bản</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Ngành</Label>
                  <Select value={watch('industry')} onValueChange={v => {
                    setValue('industry', v);
                    setValue('industryLabel', INDUSTRY_OPTIONS.find(o => o.value === v)?.label || v);
                  }}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {INDUSTRY_OPTIONS.map(o => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Quy mô</Label>
                  <Select value={watch('scale')} onValueChange={v => {
                    setValue('scale', v);
                    setValue('scaleLabel', SCALE_OPTIONS.find(o => o.value === v)?.label || v);
                  }}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {SCALE_OPTIONS.map(o => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Vấn đề chính</Label>
                  <Select value={watch('mainProblem')} onValueChange={v => {
                    setValue('mainProblem', v);
                    setValue('mainProblemLabel', PROBLEM_OPTIONS.find(o => o.value === v)?.label || v);
                  }}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {PROBLEM_OPTIONS.map(o => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Context */}
          <Card>
            <CardHeader><CardTitle className="text-lg">Bối cảnh doanh nghiệp</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Loại hình</Label>
                  <Input {...register('contextBusinessType')} placeholder="VD: Chuỗi bán lẻ" />
                </div>
                <div className="space-y-2">
                  <Label>Ngành</Label>
                  <Input {...register('contextIndustry')} placeholder="VD: Thời trang" />
                </div>
                <div className="space-y-2">
                  <Label>Quy mô</Label>
                  <Input {...register('contextScale')} placeholder="VD: 25 nhân sự" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Tình huống</Label>
                <Textarea {...register('contextSituation')} placeholder="Mô tả bối cảnh doanh nghiệp..." rows={3} />
              </div>
            </CardContent>
          </Card>

          {/* Pain Points */}
          <Card>
            <CardHeader><CardTitle className="text-lg">Vấn đề quen thuộc</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {painPointsArray.fields.map((field, i) => (
                <div key={field.id} className="flex gap-2">
                  <Input {...register(`painPoints.${i}.value`)} placeholder={`Vấn đề ${i + 1}`} />
                  {painPointsArray.fields.length > 1 && (
                    <Button type="button" variant="ghost" size="icon" onClick={() => painPointsArray.remove(i)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button type="button" variant="outline" size="sm" onClick={() => painPointsArray.append({ value: '' })}>
                <Plus className="w-4 h-4 mr-1" /> Thêm
              </Button>
            </CardContent>
          </Card>

          {/* Previous Attempts */}
          <Card>
            <CardHeader><CardTitle className="text-lg">Đã từng thử gì</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {previousAttemptsArray.fields.map((field, i) => (
                <div key={field.id} className="flex gap-2">
                  <Input {...register(`previousAttempts.${i}.value`)} placeholder={`Cách thử ${i + 1}`} />
                  {previousAttemptsArray.fields.length > 1 && (
                    <Button type="button" variant="ghost" size="icon" onClick={() => previousAttemptsArray.remove(i)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button type="button" variant="outline" size="sm" onClick={() => previousAttemptsArray.append({ value: '' })}>
                <Plus className="w-4 h-4 mr-1" /> Thêm
              </Button>
              <div className="space-y-2 pt-2">
                <Label>Kết quả</Label>
                <Textarea {...register('previousAttemptsResult')} placeholder="Kết quả của những lần thử trước..." rows={2} />
              </div>
            </CardContent>
          </Card>

          {/* Root Causes */}
          <Card>
            <CardHeader><CardTitle className="text-lg">Vấn đề gốc rễ</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {rootCausesArray.fields.map((field, i) => (
                <div key={field.id} className="space-y-2 p-4 border border-border rounded-lg relative">
                  {rootCausesArray.fields.length > 1 && (
                    <Button type="button" variant="ghost" size="icon" className="absolute top-2 right-2" onClick={() => rootCausesArray.remove(i)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                  <Input {...register(`rootCauses.${i}.title`)} placeholder="Tiêu đề" />
                  <Textarea {...register(`rootCauses.${i}.description`)} placeholder="Mô tả" rows={2} />
                  <Input {...register(`rootCauses.${i}.consequence`)} placeholder="Hệ quả" />
                </div>
              ))}
              <Button type="button" variant="outline" size="sm" onClick={() => rootCausesArray.append({ title: '', description: '', consequence: '' })}>
                <Plus className="w-4 h-4 mr-1" /> Thêm nguyên nhân
              </Button>
            </CardContent>
          </Card>

          {/* Solution */}
          <Card>
            <CardHeader><CardTitle className="text-lg">Giải pháp triển khai</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Mô tả giải pháp</Label>
                <RichTextEditor content={watch('solutionDescription') || ''} onChange={v => setValue('solutionDescription', v)} placeholder="Mô tả chi tiết giải pháp..." />
              </div>
              <div className="space-y-2">
                <Label>Cách tiếp cận</Label>
                <Textarea {...register('solutionApproach')} placeholder="Cách tiếp cận..." rows={2} />
              </div>
              <Separator />
              <Label className="font-semibold">Các bước triển khai</Label>
              {solutionStepsArray.fields.map((field, i) => (
                <div key={field.id} className="flex gap-2 items-start">
                  <span className="mt-2.5 text-sm text-muted-foreground font-medium w-6 shrink-0">{i + 1}.</span>
                  <div className="flex-1 space-y-2">
                    <Input {...register(`solutionSteps.${i}.title`)} placeholder="Tên bước" />
                    <Textarea {...register(`solutionSteps.${i}.description`)} placeholder="Mô tả" rows={2} />
                  </div>
                  {solutionStepsArray.fields.length > 1 && (
                    <Button type="button" variant="ghost" size="icon" onClick={() => solutionStepsArray.remove(i)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button type="button" variant="outline" size="sm" onClick={() => solutionStepsArray.append({ title: '', description: '' })}>
                <Plus className="w-4 h-4 mr-1" /> Thêm bước
              </Button>
              <Separator />
              <Label className="font-semibold">Thay đổi hàng ngày</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Trước</Label>
                  <Textarea {...register('dailyChangesBefore')} placeholder="Trước khi triển khai..." rows={3} />
                </div>
                <div className="space-y-2">
                  <Label>Sau</Label>
                  <Textarea {...register('dailyChangesAfter')} placeholder="Sau khi triển khai..." rows={3} />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Attachments */}
          <Card>
            <CardHeader><CardTitle className="text-lg">Tệp đính kèm</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Label htmlFor="file-upload" className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-md hover:bg-secondary/80 transition-colors text-sm">
                  <Upload className="w-4 h-4" />
                  {isUploading ? 'Đang upload...' : 'Chọn file'}
                </Label>
                <input id="file-upload" type="file" multiple className="hidden" onChange={handleFileUpload} disabled={isUploading} />
                <span className="text-sm text-muted-foreground">Hỗ trợ hình ảnh và tệp tin</span>
              </div>
              {attachmentsArray.fields.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {attachmentsArray.fields.map((field, i) => {
                    const att = watch(`attachments.${i}`);
                    return (
                      <div key={field.id} className="border border-border rounded-lg p-3 space-y-2 relative">
                        <Button type="button" variant="ghost" size="icon" className="absolute top-1 right-1" onClick={() => attachmentsArray.remove(i)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                        {att?.type === 'image' && att?.url && (
                          <img src={att.url} alt={att.caption} className="w-full h-32 object-cover rounded" />
                        )}
                        <Input {...register(`attachments.${i}.caption`)} placeholder="Mô tả file" />
                        <input type="hidden" {...register(`attachments.${i}.type`)} />
                        <input type="hidden" {...register(`attachments.${i}.url`)} />
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Results */}
          <Card>
            <CardHeader><CardTitle className="text-lg">Kết quả đạt được</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {resultsArray.fields.map((field, i) => (
                <div key={field.id} className="grid grid-cols-1 md:grid-cols-3 gap-2 items-start">
                  <Input {...register(`results.${i}.metric`)} placeholder="Chỉ số (VD: Thời gian báo cáo)" />
                  <Input {...register(`results.${i}.value`)} placeholder="Giá trị (VD: Giảm 80%)" />
                  <div className="flex gap-2">
                    <Input {...register(`results.${i}.description`)} placeholder="Mô tả" />
                    {resultsArray.fields.length > 1 && (
                      <Button type="button" variant="ghost" size="icon" onClick={() => resultsArray.remove(i)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
              <Button type="button" variant="outline" size="sm" onClick={() => resultsArray.append({ metric: '', value: '', description: '' })}>
                <Plus className="w-4 h-4 mr-1" /> Thêm kết quả
              </Button>
            </CardContent>
          </Card>

          {/* Suitable / Not suitable */}
          <Card>
            <CardHeader><CardTitle className="text-lg">Phù hợp & Không phù hợp</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="font-semibold text-sm mb-2 block">Phù hợp cho</Label>
                {suitableForArray.fields.map((field, i) => (
                  <div key={field.id} className="flex gap-2 mb-2">
                    <Input {...register(`suitableFor.${i}.value`)} placeholder="VD: Doanh nghiệp bán lẻ..." />
                    {suitableForArray.fields.length > 1 && (
                      <Button type="button" variant="ghost" size="icon" onClick={() => suitableForArray.remove(i)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button type="button" variant="outline" size="sm" onClick={() => suitableForArray.append({ value: '' })}>
                  <Plus className="w-4 h-4 mr-1" /> Thêm
                </Button>
              </div>
              <Separator />
              <div>
                <Label className="font-semibold text-sm mb-2 block">Không phù hợp cho</Label>
                {notSuitableForArray.fields.map((field, i) => (
                  <div key={field.id} className="flex gap-2 mb-2">
                    <Input {...register(`notSuitableFor.${i}.value`)} placeholder="VD: Doanh nghiệp chưa có quy trình..." />
                    {notSuitableForArray.fields.length > 1 && (
                      <Button type="button" variant="ghost" size="icon" onClick={() => notSuitableForArray.remove(i)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button type="button" variant="outline" size="sm" onClick={() => notSuitableForArray.append({ value: '' })}>
                  <Plus className="w-4 h-4 mr-1" /> Thêm
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Key Insight & CTA */}
          <Card>
            <CardHeader><CardTitle className="text-lg">Insight & CTA</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Key Insight</Label>
                <Textarea {...register('keyInsight')} placeholder="Bài học rút ra..." rows={3} />
              </div>
              <div className="space-y-2">
                <Label>CTA Question</Label>
                <Input {...register('ctaQuestion')} placeholder="VD: Bạn có đang gặp vấn đề tương tự?" />
              </div>
            </CardContent>
          </Card>

          {/* Submit */}
          <div className="flex gap-3 justify-end pb-8">
            <Button type="button" variant="outline" onClick={() => navigate('/admin')}>Hủy</Button>
            <Button type="submit" disabled={isSubmitting || createMutation.isPending || updateMutation.isPending}>
              {(isSubmitting || createMutation.isPending || updateMutation.isPending) && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              {isEditing ? 'Cập nhật' : 'Tạo mới'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminCaseStudyForm;
