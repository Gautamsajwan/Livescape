"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CopyButton from "./copy-button";
import { Eye } from "lucide-react";

type Props = {
  value: string | null;
};

function KeyCard({ value }: Props) {
  const [show, setShow] = useState(false);
  return (
    <div className="rounded-xl bg-muted px-5 py-7">
      <div className="flex items-start gap-x-7">
        <p className="font-semibold shrink-0">Stream Key</p>
        <div className="space-y-2 w-full">
          <div className="w-full flex items-center gap-x-2">
            <Input
              value={value || ""}
              type={show ? "text" : "password"}
              disabled
              placeholder="Stream key"
            />
            <CopyButton value={value || ""} />
          </div>
          <Button onClick={() => setShow(!show)} className="bg-blue-200 hover:bg-blue-400 text-black px-3 h-8 flex items-center gap-1">
            <Eye className="w-5 h-5"/>
            {show ? "Hide" : "Show"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default KeyCard;
