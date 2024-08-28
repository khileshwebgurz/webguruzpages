// src/app/blogs/page.jsx
import { getBlogData } from "../../../lib/blogsData";
import Link from "next/link";
import RecentPost from "../../components/blogComponents/01RecentPost";
import AllPost from "../../components/blogComponents/02AllPosts";

export default async function BlogsPage() {
  const { posts, paginatedPosts, totalPages, currentPage } = await getBlogData(1);

  return (
    <section className="blog-content-main">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12">
            <ul>
              <li><Link href="/categories/web-design">Web Design</Link></li>
              <li><Link href="/categories/online-reputation-management">Online Reputation Management</Link></li>
              <li><Link href="/categories/hubspot">Hubspot</Link></li>
              <li><Link href="/categories/digital-marketing">Digital Marketing</Link></li>
              <li><Link href="/categories/google-remarketing">Google Remarketing</Link></li>
              <li><Link href="/categories/artificial-intelligence">Artificial Intelligence</Link></li>
            </ul>
          </div>
        </div>
        <RecentPost posts={posts} />
        <AllPost
          posts={paginatedPosts}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </section>
  );
}
