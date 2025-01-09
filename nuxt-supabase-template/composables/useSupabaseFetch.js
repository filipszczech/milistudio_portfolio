export const useSupabaseFetch = async (table, filters = {}, single = false, orderBy = null, ascending = true) => {
    const supabase = useSupabaseClient();
    let query = supabase.from(table).select('*');

    Object.keys(filters).forEach((key) => {
        query = query.eq(key, filters[key]);
    });

    if (orderBy) {
        query = query.order(orderBy, { ascending });
    }

    const { data, error } = single ? await query.single() : await query;
    if (error) {
        throw new Error(`Error fetching ${table}: ${error.message}`);
    }
    return data;
};
