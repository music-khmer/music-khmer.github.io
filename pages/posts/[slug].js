import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import PageLayout from "../../components/PageLayout";

export const getStaticPaths = async () => {
    const files = fs.readdirSync("posts");
    console.log("files: ", files);

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace(".md", "")
        }
    }));
    console.log("paths: ", paths);
    
    return { 
        paths,
        fallback: false
    }
};

export const getStaticProps = async ({ params: { slug }}) => {
    const markdown = fs.readFileSync(path.join('posts', `${slug}.md`)).toString();

    const { data, content } = matter(markdown);
    const html = marked(content);

    return {
        props: { 
            markdown,
            content,
            slug, 
            data,
            html
        }
    }
};

export default function Post({ html, data }) {
    return (
        <PageLayout title={data.title} description={data.description}>
            <div dangerouslySetInnerHTML={{ __html: html }}/>
        </PageLayout>
    );
}