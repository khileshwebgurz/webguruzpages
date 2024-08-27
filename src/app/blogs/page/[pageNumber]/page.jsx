import BlogListPage from "../../../../components/blogComponents/BlogListPage";

export default async function BlogsPageNumber({ params }) {
  const pageNumber = parseInt(params.pageNumber, 10);

  return (
    <>
      <section className="blog-content-main">
        <div className="container">
          <BlogListPage pageNumber={pageNumber} />;
        </div>
      </section>
    </>
  );
}
