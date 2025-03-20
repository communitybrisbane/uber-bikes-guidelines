
import { Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type CopyButtonProps = {
  code: string;
};

const CopyButton = ({ code }: CopyButtonProps) => {
  const { toast } = useToast();
  
  const handleCopy = () => {
    navigator.clipboard.writeText(code)
      .then(() => {
        toast({
          title: "紹介コードをコピーしました",
          description: "登録フォームに貼り付けてください",
        });
      })
      .catch(() => {
        toast({
          title: "コピーに失敗しました",
          description: "手動でコピーしてください",
          variant: "destructive",
        });
      });
  };
  
  return (
    <button 
      onClick={handleCopy}
      className="bg-uber-green/20 hover:bg-uber-green/30 p-2 rounded-md transition-colors"
      aria-label="紹介コードをコピー"
    >
      <Copy size={18} className="text-uber-green" />
    </button>
  );
};

export default CopyButton;
