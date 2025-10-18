'use client';

import { useState } from 'react';

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
      <button type="button" disabled={uploading} onClick={uploadFile}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
      {uploadSuccess && <p className="text-green-900 ml-2">Success</p>}
    </main>
  );
}
