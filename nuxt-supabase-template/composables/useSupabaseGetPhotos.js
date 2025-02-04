export const useSupabaseGetPhotos = async (bucketName, folder = '') => {
  const supabase = useSupabaseClient();

  const { data: files, error: listError } = await supabase.storage.from(bucketName).list(`mili/${folder}`);

  if (listError) {
    return { data: null, error: 'Błąd pobierania plików: ' + listError.message };
  }

  const images = files?.map(file => ({
    name: file.name,
    url: supabase.storage.from(bucketName).getPublicUrl(`mili/${folder}/${file.name}`).data.publicUrl,
  })) || [];

  return { data: images, error: null };
};
