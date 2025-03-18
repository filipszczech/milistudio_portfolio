import { supabase_client } from "@/utils/supabase_server.js";

export default defineEventHandler(async (event) => {
  const { categoryId } = getQuery(event);

  if (!categoryId) {
    throw createError({ statusCode: 400, message: 'Brak wymaganego parametru categoryId' });
  }

  const { data, error } = await supabase_client
    .from('photos_mili')
    .select('*')
    .eq('category_id', categoryId)
    .order('order', { ascending: true, nullsFirst: false });

  if (error) {
    throw createError({ statusCode: 500, message: error.message });
  }

  return data;
});