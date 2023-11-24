import { Typography } from "@mui/material"
import PropTypes from 'prop-types';

const Heading = ({ title, subtitle }) => {
  return (
    <div>
      <Typography sx={{ pt: 8, textAlign: "center", typography: { xs: 'h4', md: 'h3' } }}>{title}</Typography>
      <Typography sx={{ pb: 8, textAlign: "center", color: '#727c82', typography: { xs: 'subtitle1', md: 'subtitle' } }} gutterBottom >{subtitle}</Typography>
    </div>
  )
}

Heading.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Heading
