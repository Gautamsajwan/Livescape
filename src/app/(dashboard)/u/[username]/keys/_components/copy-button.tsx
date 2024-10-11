"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCheck, Copy } from "lucide-react";

type Props = {
  value?: string;
};

function CopyButton({ value }: Props) {
  const [isCopied, setIsCopied] = useState(false);

  const onCopy = () => {
    if (!value) return;

    setIsCopied(true);
    navigator.clipboard.writeText(value);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const Icon = isCopied ? CheckCheck : Copy;
  
  return (
    <Button
      onClick={onCopy}
      disabled={!value || isCopied}
      variant="ghost"
      size="sm"
    >
      <Icon className="h-4 w-4" />
    </Button>
  );
}

export default CopyButton;
