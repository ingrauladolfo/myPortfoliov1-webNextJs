import { personalProjects } from "../../constants/projects/personalProjects";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  BlogCard,
  CardInfo,
  GridContainer,
  HeaderThree,
  Hr,
  Img,
  TagList,
  Tag,
  TitleContent,
  UtilityList,
  ExternalLinks,
} from "./ProjectsStyles";
export default function PersonalProjects() {
  return (
    <Section nopadding>
      <SectionDivider />
      <SectionTitle main>Freelancer/Evaluations/Portfolio</SectionTitle>
      <GridContainer>
        {personalProjects.map((p, i) => {
          return (
            <BlogCard key={i}>
              <Img src={p.image} />
              <TitleContent>
                <HeaderThree title>{p.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo className="card-info">{p.description}</CardInfo>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {p.tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>;
                  })}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={p.visit} target="_blank">
                  {p.visitShortName}
                </ExternalLinks>
                <ExternalLinks>{p.building}</ExternalLinks>
              </UtilityList>
            </BlogCard>
          );
        })}
      </GridContainer>
    </Section>
  );
}
