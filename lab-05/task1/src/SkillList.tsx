import { Skill } from "./types";
interface SkillListProps {
skills: Skill[]; 
}
const SkillList = ({ skills }: SkillListProps) => { const getLevelColor = (level: string) => {
    switch (level) {
        case 'Expert': return 'gold';
        case 'Intermidate': return 'silver';
        default: return 'bronze';
    }
};
return (
<ul>
{skills.map((skill) => (
<li key={skill.id} style={{ color : getLevelColor(skill.level)}}>
{skill.name} - <strong>{skill.level}</strong>
</li>
))}
</ul>
);
};
export default SkillList