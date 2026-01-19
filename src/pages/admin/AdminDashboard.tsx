import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAllCaseStudies, useDeleteCaseStudy } from '@/hooks/useCaseStudies';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Eye, 
  LogOut,
  FileText,
  Filter
} from 'lucide-react';
import { industryOptions, scaleOptions } from '@/data/caseStudies';

export default function AdminDashboard() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [industryFilter, setIndustryFilter] = useState<string>('');
  const [scaleFilter, setScaleFilter] = useState<string>('');
  const [deleteId, setDeleteId] = useState<string | null>(null);
  
  const { signOut } = useAuth();
  const { toast } = useToast();
  
  const { data: caseStudies, isLoading } = useAllCaseStudies({
    status: statusFilter || undefined,
    industry: industryFilter || undefined,
    scale: scaleFilter || undefined,
    search: search || undefined,
  });
  
  const deleteMutation = useDeleteCaseStudy();

  const handleDelete = async () => {
    if (!deleteId) return;
    
    try {
      await deleteMutation.mutateAsync(deleteId);
      toast({
        title: 'Đã xoá bài viết',
        description: 'Bài viết đã được xoá thành công',
      });
    } catch (error) {
      toast({
        title: 'Lỗi',
        description: 'Không thể xoá bài viết',
        variant: 'destructive',
      });
    }
    setDeleteId(null);
  };

  const clearFilters = () => {
    setSearch('');
    setStatusFilter('');
    setIndustryFilter('');
    setScaleFilter('');
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Đã xuất bản</Badge>;
      case 'draft':
        return <Badge variant="secondary">Bản nháp</Badge>;
      case 'archived':
        return <Badge variant="outline">Đã lưu trữ</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-10">
        <div className="container-content flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <FileText className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-semibold">Lark Consult CMS</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" target="_blank">
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                Xem Website
              </Button>
            </Link>
            <Button variant="ghost" size="sm" onClick={signOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Đăng xuất
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-content py-8">
        {/* Page Title & Actions */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold">Quản lý Case Studies</h2>
            <p className="text-muted-foreground">
              {caseStudies?.length || 0} bài viết
            </p>
          </div>
          <Link to="/admin/case-studies/new">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Tạo bài viết mới
            </Button>
          </Link>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl border border-border p-4 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Bộ lọc</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Tìm kiếm theo tiêu đề, slug..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Trạng thái" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả trạng thái</SelectItem>
                <SelectItem value="published">Đã xuất bản</SelectItem>
                <SelectItem value="draft">Bản nháp</SelectItem>
                <SelectItem value="archived">Đã lưu trữ</SelectItem>
              </SelectContent>
            </Select>
            <Select value={industryFilter} onValueChange={setIndustryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Ngành" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả ngành</SelectItem>
                {industryOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={scaleFilter} onValueChange={setScaleFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Quy mô" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả quy mô</SelectItem>
                {scaleOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {(search || statusFilter || industryFilter || scaleFilter) && (
            <div className="mt-4 flex justify-end">
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Xoá bộ lọc
              </Button>
            </div>
          )}
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[40%]">Tiêu đề</TableHead>
                <TableHead>Ngành</TableHead>
                <TableHead>Quy mô</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Cập nhật</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-12">
                    Đang tải...
                  </TableCell>
                </TableRow>
              ) : caseStudies?.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-12 text-muted-foreground">
                    Chưa có bài viết nào
                  </TableCell>
                </TableRow>
              ) : (
                caseStudies?.map((cs) => (
                  <TableRow key={cs.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium line-clamp-1">{cs.title}</p>
                        <p className="text-sm text-muted-foreground">/{cs.slug}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{cs.industryLabel}</Badge>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-muted-foreground">{cs.scaleLabel}</span>
                    </TableCell>
                    <TableCell>{getStatusBadge(cs.status)}</TableCell>
                    <TableCell>
                      <span className="text-sm text-muted-foreground">
                        {new Date(cs.updatedAt).toLocaleDateString('vi-VN')}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        {cs.status === 'published' && (
                          <Link to={`/case-studies/${cs.slug}`} target="_blank">
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </Link>
                        )}
                        <Link to={`/admin/case-studies/${cs.id}/edit`}>
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => setDeleteId(cs.id)}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </main>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Xác nhận xoá bài viết?</AlertDialogTitle>
            <AlertDialogDescription>
              Hành động này không thể hoàn tác. Bài viết sẽ bị xoá vĩnh viễn khỏi hệ thống.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Huỷ</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Xoá
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
