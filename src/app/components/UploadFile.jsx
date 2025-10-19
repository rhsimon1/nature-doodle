'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function UploadFile() {
  const [file, setFile] = useState();
  const [url, setUrl] = useState('');
  const [uploadSuccess, setUploadSucces] = useState(false);
  const [uploading, setUploading] = useState(false);

  const uploadFile = async () => {
    try {
      if (!file) {
        alert('No file selected');
        return;
      }

      setUploading(true);
      const data = new FormData();
      data.set('file', file);
      const uploadRequest = await fetch('/api/file', {
        method: 'POST',
        body: data,
      });
      const signedUrl = await uploadRequest.json();
      setUrl(signedUrl);
      setUploading(false);
      setUploadSucces(true);
    } catch (e) {
      console.log(e);
      setUploading(false);
      alert('Trouble uploading file');
    }
  };

  const handleChange = (e) => {
    setFile(e.target?.files?.[0]);
  };

  return (
    <main className="m-auto flex items-center justify-center">
      <input type="file" onChange={handleChange} />
      <Button
        type="button"
        disabled={uploading}
        onClick={uploadFile}
        className="w-1/2 bg-green-100 text-green-800 font-medium hover:bg-green-200 transition"
      >
        {uploading ? 'Uploading...' : 'Upload'}
      </Button>

      {uploadSuccess && <p className="text-green-900 ml-2">Success</p>}
    </main>
  );
}
