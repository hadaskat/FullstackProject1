import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';

export default function RowCard(props:any) {
  return (
    <div className='card2'>
    <Card row variant="outlined" sx={{ width: 260, bgcolor: 'background.body' }} >
      <CardOverflow >
        <AspectRatio ratio="1" sx={{ width: 90 }}>
          <img
          src={require("../../../public/image2/" + props.l.trampolina.image)}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent sx={{ px: 2 }}>
        <Typography fontWeight="md" textColor="success.plainColor" mb={0.5}>
          {props.l.trampolina.name}
        </Typography>
        <Typography level="body2">
            {props.l.lendingDate}
        </Typography>
        <Typography level="body2">
            {props.l.returnDate}
        </Typography>
      </CardContent>
      <Divider />
      <CardOverflow
        variant="soft"
        color="primary"
        sx={{
          px: 0.2,
          writingMode: 'vertical-rl',
          textAlign: 'center',
          fontSize: 'xs2',
          fontWeight: 'xl2',
          letterSpacing: '1px',
          textTransform: 'uppercase',
        }}
      >
        
      </CardOverflow>
    </Card>
    </div>
  );
}