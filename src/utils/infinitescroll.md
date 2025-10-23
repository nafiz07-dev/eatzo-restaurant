// Async function for infinite scroll:
export async function fetchMenuItems({ pageParam = 0, restId }) {
const limit = 10;
const from = pageParam \* limit;
const to = from + limit - 1;

const { data, error } = await supabase
.from("menu_item_with_rating")
.select("\*")
.eq("restaurant_id", restId) // 👈 filter by restId
.range(from, to);

if (error) throw error;

return { data, nextPage: pageParam + 1, hasMore: data.length === limit };
}

// react query for infinite scroll:
export function useInfiniteMenuItems(restId) {
return useInfiniteQuery({
queryKey: ["menu-items", restId], // 👈 include restId in cache key
queryFn: ({ pageParam = 0 }) => fetchMenuItems({ pageParam, restId }),
getNextPageParam: (lastPage) =>
lastPage.hasMore ? lastPage.nextPage : undefined,
});
}

// On the component.
// on the function body.
const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
useInfiniteMenuItems(restId); // 👈 pass restId here

const items = data?.pages.flatMap((page) => page.data) ?? [];

// Ref trigger
const loadMoreRef = useIntersectionObserver(() => {
if (hasNextPage && !isFetchingNextPage) {
fetchNextPage();
}
});

// on the jsx

<div ref={loadMoreRef} style={{ height: 1 }} />
