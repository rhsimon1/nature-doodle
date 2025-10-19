'use client';

import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

export default function UploadFile() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState('');
  const [uploadSuccess, setUploadSucces] = useState(false);
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const selected = e.target.files?.[0] || null;
    setFile(selected);
  };

  const openPicker = () => inputRef.current?.click();

  const uploadFile = async () => {
    if (!file) {
      alert('No file selected');
      return;
    }
    try {
      setUploading(true);
      const data = new FormData();
      data.set('file', file);

      const res = await fetch('/api/file', { method: 'POST', body: data });
      const signedUrl = await res.json();
      setUrl(signedUrl);
      setUploadSucces(true);
    } catch (e) {
      console.error(e);
      alert('Trouble uploading file');
    } finally {
      setUploading(false);
    }
  };

  return (
    <main className="m-auto flex flex-col items-center justify-center gap-3">
      <input
        ref={inputRef}
        type="file"
        onChange={handleChange}
        className="hidden"
      />

      <Button
        type="button"
        onClick={openPicker}
        className="w-full bg-green-100 text-green-800 font-medium hover:bg-green-200 transition"
      >
        {file ? file.name : 'Choose file…'}
      </Button>

      <Button
        type="button"
        disabled={uploading}
        onClick={uploadFile}
        className="w-full bg-green-100 text-green-800 font-medium hover:bg-green-200 transition"
      >
        {uploading ? 'Uploading…' : 'Upload'}
      </Button>

      {uploadSuccess && <p className="text-green-900 mt-2">Success ✅</p>}
    </main>
  );
}
