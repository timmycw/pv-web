import Card from '@mui/material/Card';
export default function TeamMember(member : any) {
  return (  
  <div>
     <Card>
        <img src={require(member.image)}/>
        {member.name}
        
    </Card>
  </div>);
}