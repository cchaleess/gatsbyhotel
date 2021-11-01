import { graphql, useStaticQuery } from "gatsby";

const useSeo = () => {
    const data = useStaticQuery(graphql`
    {
        datoCmsSite {
          globalSeo {
            siteName
            titleSuffix
            fallbackSeo {
              description
            }
          }
        }
      }
    `)
    return data.datoCmsSite.globalSeo;
}
export default useSeo;