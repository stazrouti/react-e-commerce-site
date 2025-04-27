// pages/[pageId].js
import FlexSearch from 'flexsearch';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import getPageContent from './getpagecontent';
import SearchComponent from './searchcomponent';


const Page = ({ content, index }) => {
  const router = useRouter();

  useEffect(() => {
    // Do something when the page ID changes
  }, [router.query.pageId]);

  return (
    <div>
      <h1>Page Content</h1>
      <p>{content}</p>

      {/* Integrate the SearchComponent */}
      <SearchComponent index={index} />
    </div>
  );
};

// Fetch content and build search index dynamically
export async function getServerSideProps(context) {
  const { params } = context;
  const pageId = params.pageId;
  const content = await getPageContent(pageId);

  // Build the search index dynamically
  const index = await buildSearchIndex();

  return {
    props: {
      content,
      index,
    },
  };
}

const buildSearchIndex = async () => {
  // Build your search index here based on your data source
  // For example, fetch content from multiple pages and add to the index
  const pages = ['page1', 'page2', 'page3'];
  const searchIndex = new FlexSearch();

  for (const page of pages) {
    const pageContent = await getPageContent(page);
    searchIndex.add({ id: page, content: pageContent });
  }

  return searchIndex;
};

export default Page;
