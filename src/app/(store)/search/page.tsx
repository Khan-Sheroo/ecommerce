// async function SearchPage( {
//     searchParams,
// }: {
//     searchParams: {
//     query: string;
// };
// }) {
//     const { query } = await searchParams;

//     return <div>SearchPage for { query }</div>;
    
// }

// export default SearchPage;

// async function SearchPage({
//     searchParams,
// }: {searchParams: {
//     query: string;
// };
// }) {
//     const { query } = await searchParams
    
//     return <div>Search Results for { query }</div>
// }

// async function SearchPage({
//     searchParams,
// } : {searchParams:{
//     query: string;
// }
// }) { 
//     const { query } = await searchParams
//     return <div>Search Results for { query }</div>
// }
// export default SearchPage;

// async function SearchPage({
//     searchParams,
// }:{ searchParams: {
//     query: string;

// }
// }) {
//     const { query } = await searchParams
//     return <div>Search Results for { query }</div>

// }
// export default SearchPage;

async function SearchPage({ 
    searchParams,
} : {searchParams: {
    query : string
}
}) {
    const { query } = await searchParams;
    return <div>Search Results for {query}</div>
}
export default SearchPage;
