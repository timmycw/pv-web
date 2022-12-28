import Card from '@mui/material/Card';
export default function TeamMember(member : any) {
  return (
  <div>
     <Card variant="outlined">{member.name}</Card>
  </div>);
}