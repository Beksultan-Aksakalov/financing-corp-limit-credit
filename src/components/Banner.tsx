import React from "react";
import { Select, MenuItem } from "@material-ui/core";
import { BccTypography, BccButton } from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      container: {
        background: `url(${
          process.env.PUBLIC_URL + "icons/banner.png"
        }) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "right",
      },
      containerOut: {
        background: "linear-gradient(to top, #f6f6f5, #f4f4f2)",
      },
      innerContainer: {
        maxWidth: 1280,
        position: "relative",
        margin: "0 auto",
        width: "100%",
        padding: "100px 100px 150px",
        boxSizing: "border-box",
      },
      title: {
        marginBottom: 152,
      },
      subTitle: {
        marginBottom: 30,
        opacity: 0.7,
      },
      block: {
        marginBottom: 30,
      },
      firstBlock: {
        marginRight: 70,
      },
      blockText: {
        marginBottom: 5,
      },
      openBtn: { minWidth: 300, fontSize: 18, fontWeight: "bold" },
      select: {
        position: "absolute",
        right: 100,
        top: 24,
        color: "#000D1A",
        paddingLeft: 7,
        fontSize: 14,
        backgroundColor: "white",
        borderRadius: 8,
        "&:hover:not(.Mui-disabled):before": {
          borderBottom: 0,
        },
        "&::after, &::before": {
          borderBottom: 0,
        },
      },
    },

    [theme.breakpoints.down("sm")]: {
      container: {
        background: `url(${
          process.env.PUBLIC_URL + "icons/banner-m.png"
        }) no-repeat white`,
        backgroundSize: "contain",
        backgroundPosition: "right",
      },
      containerOut: {
        background: "linear-gradient(to top, #ffffff, #f9f6f3)",
      },
      innerContainer: {
        position: "relative",
        margin: "0 auto",
        width: "100%",
        padding: "60px 20px 40px",
        boxSizing: "border-box",
      },
      title: {
        marginBottom: 15,
      },
      subTitle: {
        marginBottom: 30,
        opacity: 0.7,
        fontWeight: "normal",
        fontFamily: "Roboto",
        fontSize: 16,
        lineHeight: "19px",
        color: "#5B5B5B",
      },
      blockText: {
        marginBottom: 5,
        fontWeight: "bold",
        fontFamily: "Roboto",
        fontSize: 24,
        lineHeight: "28px",
        color: "#141414",
      },
      firstBlock: {
        marginBottom: 15,
      },
      openBtn: {
        minWidth: 300,
        fontSize: 18,
        fontWeight: "bold",
        fontFamily: "Roboto",
        lineHeight: "21px",
        color: "#ffffff",
        width: "100%",
        marginTop: 160,
      },
      select: {
        position: "absolute",
        right: 20,
        top: 50,
        color: "#000D1A",
        paddingLeft: 7,
        fontSize: 14,
        backgroundColor: "white",
        borderRadius: 8,
        "&:hover:not(.Mui-disabled):before": {
          borderBottom: 0,
        },
        "&::after, &::before": {
          borderBottom: 0,
        },
      },
    },
    link: {
      color: "#249052",
      textDecoration: "underline",
      cursor: "pointer",
    },
  })
);

const Banner = (props: any) => {
  const classes = useStyles({});
  const { t } = useTranslation();

  const goToForm = (e: any) => {
    e.preventDefault();
    props.scrollToForm();
  };
  const handleLangChange = (lang: any) => {
    props.changeLang(lang);
  };

  return (
    <div className={classes.containerOut}>
      <div className={classes.container}>
        <div className={classes.innerContainer}>
          <BccTypography type="h1" block mb="12px">
            {t("banner.title")}
          </BccTypography>
          <BccTypography
            type="h4"
            weight="normal"
            color="#80868C"
            block
            className={classes.title}
          >
            {t("banner.subtitle")}
          </BccTypography>
          <Select
            className={classes.select}
            value={props.lang}
            onChange={(e: any) => handleLangChange(e.target.value)}
            inputProps={{
              classes: {
                icon: classes.icon,
              },
            }}
          >
            <MenuItem value="ru">РУС</MenuItem>
            <MenuItem value="kz">КАЗ</MenuItem>
          </Select>
          <BccButton
            className={classes.openBtn}
            variant="contained"
            color="primary"
            onClick={(e: any) => goToForm(e)}
          >
            {t("banner.button")}
          </BccButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
