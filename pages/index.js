import fs from "fs";
import Music from "./music";

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  const slugs = files.map(filename => filename.replace(".md", ""));

  return {
    props: {
      slugs
    }
  }
};

export default function Home({ slugs }) {


  return (
    <div>
      <Music></Music>
    </div>
    // <PageLayout title="Home" description="Home page">
    //   <PostList data={data}/>
    //   {slugs.map(slug => {
    //     return (
    //       <div key={slug} >
    //         <Link href={'posts/' + slug}>
    //           <a>{slug}</a>
    //         </Link> 
    //       </div>    
    //     );
    //   })}
    // </PageLayout>
  )
}
