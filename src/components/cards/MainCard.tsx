import { Card, CardContent, CardHeader, Typography, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface Props {
  title: string;
  children: any;
  border?: boolean;
  sx?: object;
  contentSX?: object;
  action?: any;
}

const defaultProps = {
  border: true
};

const MainCard: React.FC<Props> = (props) => {
  const theme = useTheme();
  props = { ...defaultProps, ...props };
  return (
    <Card
      sx={{
        border: props.border ? '1px solid' : 'none',
        borderColor: theme.palette.primary.light,
        borderRadius: 6,
        ':hover': {
          boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'
        },

        ...props.sx
      }}
    >
      <CardHeader title={<Typography variant="h3">{props.title}</Typography>} action={props.action} />
      {props.title && <Divider />}
      <CardContent sx={props.contentSX}>{props.children}</CardContent>
    </Card>
  );
};

export default MainCard;
