'use client';

import { useState, useEffect } from 'react';
import { site } from '@/content';

interface ResumeDownloadProps {
  className?: string;
  showFileSize?: boolean;
  children: React.ReactNode;
}

export default function ResumeDownload({ 
  className = "", 
  showFileSize = false, 
  children 
}: ResumeDownloadProps) {
  const [fileSize, setFileSize] = useState<string>('');

  useEffect(() => {
    if (showFileSize) {
      // Try to get file size via HEAD request
      fetch(site.resumePath, { method: 'HEAD' })
        .then(response => {
          const contentLength = response.headers.get('content-length');
          if (contentLength) {
            const bytes = parseInt(contentLength);
            const kb = Math.round(bytes / 1024);
            setFileSize(`${kb} KB`);
          }
        })
        .catch(() => {
          // Fallback if HEAD request fails
          setFileSize('PDF');
        });
    }
  }, [showFileSize]);

  return (
    <a
      href={site.resumePath}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      title={showFileSize && fileSize ? `Download resume (${fileSize})` : 'Download resume'}
    >
      {children}
      {showFileSize && fileSize && (
        <span className="ml-2 text-xs opacity-75">({fileSize})</span>
      )}
    </a>
  );
}
