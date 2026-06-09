CREATE POLICY "Public can read newspapers files"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'newspapers');