import {
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  RadioGroup,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import img1 from '../../../assets/banner/img1.jpg'
import img2 from '../../../assets/banner/img2.jpg'
import img3 from '../../../assets/banner/banner1.jpg'
import Image from "next/image";

const Banner = () => {
  const RootStyle = styled("div")(({ theme }) => ({
    paddingTop: theme.spacing(17),
    // [theme.breakpoints.up("md")]: {
    //   paddingBottom: theme.spacing(15),
    // },
    // paddingBottom: theme.spacing(5),
  }));

  return (
    <div className="bg-[#f7f7ff9c]">
      <RootStyle>
        <Container maxWidth="lg">
          <Grid container  justifyContent="center">
            <Image
              src={img2}
              className="img-fluid w-full"
              height={400}
              width={1200}
            />
          </Grid>
        </Container>
      </RootStyle>
    </div>
  );
};

export default Banner;
