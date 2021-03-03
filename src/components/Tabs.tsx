import React from "react";
import { Grid } from "@material-ui/core";
import {
  BccTypography,
  BccToggleButton,
  BccToggleButtonGroup,
  BccLink,
} from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      container: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "80px 100px",
      },
      title: {
        marginBottom: 30,
      },
      subitle: {
        marginBottom: 30,
      },
      star: {
        width: "80%",
        margin: "0 auto",
        marginBottom: 50,
        "& > div:last-child": { textAlign: "left" },
        "& > div": {
          width: "50%",
          textAlign: "center",
          "&  > img": {
            height: 350,
          },
          "&  > video": {
            height: 350,
            width: "auto",
          },
        },
      },
      starBlock2: {
        alignSelf: "center",
      },
      starBusiness: {
        color: "#249052",
        marginBottom: 10,
      },
      starSteps: {
        marginBottom: 10,
        "& > span": {
          color: "#249052",
        },
      },
      lastSetp: {
        marginBottom: 50,
      },
      lOut: {
        flexWrap: "wrap",
        "& > div": {
          width: "calc(50% - 18px)",
        },
      },
      qr: {
        "& > img": {
          height: "100%",
        },
      },
      mobileLinks: {
        marginRight: 36,
        "& > a:last-child": {
          marginBottom: 0,
        },
        "& > a": {
          display: "block",
          marginBottom: 12,
          width: 120,
          "& > img": {
            width: 120,
            display: "block",
          },
        },
      },
      toggleGroup: {
        width: "100%",
        display: "flex",
        flexWrap: "nowrap",
        border: "1px solid #27AE60",
        borderRadius: "100px",
        "& > button.Mui-selected": {
          "& > span": {
            color: "#FFFFFF!important",
          },
        },
        "& > button:hover": {
          backgroundColor: "initial",
        },
        "& > button:hover > span": {
          color: "#27AE60!important",
        },
        "& > button": {
          width: "50%",
          borderRadius: "100px!important",
          border: "none",
        },
      },
      toggleText: {
        textTransform: "initial",
        letterSpacing: "initial",
        color: "#80868C",
      },
      stepper: {
        padding: "40px 0 60px",
      },
      backButton: {
        minWidth: 250,
        textTransform: "capitalize!important",
      },
      nextBtn: {
        minWidth: 250,
        marginLeft: 12,
      },
      instructions: {
        minWidth: 250,
        textAlign: "center",
      },
      anim: {
        transition: "all 1s ease-in",
      },
      item: {
        display: "flex",
        width: "calc(50% - 20px)",
        flexWrap: "nowrap",
        alignItems: "flex-start",
        marginBottom: 50,
        "& > img": {
          marginBottom: 42,
          marginRight: 24,
          height: 60,
        },
      },
      tarifText: {
        marginTop: 24,
        marginBottom: 24,
      },
      link: {
        color: "#249052",
        textDecoration: "underline",
        cursor: "pointer",
      },
      calc: {
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        alignItems: "center",
        "& > div:first-child": {
          width: "calc(60% - 15px)",
        },
        "& > div:last-child": {
          width: "calc(40% - 15px)",
          background: "#FAFAFA",
          borderRadius: 8,
          padding: 24,
        },
      },
      paymentWrap: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        marginBottom: 60,
      },
      paymentWrapSec: {
        marginBottom: 0,
      },
      sliderWrap: {
        position: "relative",
        width: "100%",
        "& > div > div": {
          width: "100%",
        },
      },
      sliderRange: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -20,
        color: "#b3b6ba",
        display: "flex",
        justifyContent: "space-between",
        fontSize: 12,
      },
      tabsContent: {
        marginTop: 24,
      },
      input: {
        display: "block",
        width: "100%",
      },
      sumTitle: {
        marginBottom: 16,
      },
      sumText: {
        marginBottom: 24,
      },
      docs3: {
        marginTop: 24,
        "& > div": {
          width: "calc(50% - 20px)",
          display: "flex",
          flexWrap: "nowrap",
          "& > img": {
            marginRight: 24,
          },
        },
      },
      docs2: {
        marginTop: 24,
        "& > div": {
          width: "calc(50% - 20px)",
          display: "flex",
          flexWrap: "nowrap",
          alignItems: "center",
          marginBottom: 12,
          "& > img": {
            marginRight: 24,
          },
        },
      },
      docs4: {
        marginTop: 24,
        "& > div": {
          width: "calc(50% - 20px)",
          display: "flex",
          flexWrap: "nowrap",
          "& > div": {
            display: "flex",
            flexWrap: "nowrap",
            alignItems: "center",
            marginBottom: 12,
            "& > img": {
              marginRight: 24,
            },
          },
        },
      },
      docs: {
        marginTop: 24,
        "& > div": {
          width: "calc(50% - 20px)",
          marginBottom: 40,
          display: "flex",
          flexWrap: "nowrap",
          alignItems: "center",
          "& > img": {
            marginRight: 24,
          },
        },
      },
      table: {
        "& > tr > td > tr": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        },
        "& > tr > td > tr td": {
          borderBottom: 0,
          padding: "16px 16px 0 0",
          "& tr:last-child > td": { padding: "0 16px 0 0" },
          "& td": {
            padding: "0 16px 16px 0",
          },
        },
      },
      tarifDoc: {
        display: "flex",
        alignItems: "center",
        marginBottom: 24,
        marginTop: 24,
        "& > img": {
          marginRight: 12,
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      container: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "40px 20px",
      },
      title: {
        marginBottom: 30,
      },
      subitle: {
        marginBottom: 30,
      },
      star: {
        width: "80%",
        margin: "0 auto",
        marginBottom: 50,
        "& > div:last-child": { textAlign: "left" },
        "& > div": {
          width: "50%",
          textAlign: "center",
          "&  > img": {
            height: 350,
          },
          "&  > video": {
            height: 350,
            width: "auto",
          },
        },
      },
      starBlock2: {
        alignSelf: "center",
      },
      starBusiness: {
        color: "#249052",
        marginBottom: 10,
      },
      starSteps: {
        marginBottom: 10,
        "& > span": {
          color: "#249052",
        },
      },
      lastSetp: {
        marginBottom: 50,
      },
      lOut: {
        flexWrap: "wrap",
        "& > div": {
          width: "calc(50% - 18px)",
        },
      },
      qr: {
        "& > img": {
          height: "100%",
        },
      },
      mobileLinks: {
        marginRight: 36,
        "& > a:last-child": {
          marginBottom: 0,
        },
        "& > a": {
          display: "block",
          marginBottom: 12,
          width: 120,
          "& > img": {
            width: 120,
            display: "block",
          },
        },
      },
      toggleGroup: {
        width: "100%",
        display: "flex",
        flexWrap: "nowrap",
        border: "1px solid #27AE60",
        borderRadius: "100px",
        overflow: "scroll",
        justifyContent: "space-between",
        "& > button.Mui-selected": {
          "& > span": {
            color: "#FFFFFF!important",
            whiteSpace: "nowrap",
          },
        },
        "& > button:hover": {
          backgroundColor: "initial",
        },
        "& > button:hover > span": {
          color: "#27AE60!important",
        },
        "& > button": {
          borderRadius: "100px!important",
          border: "none",
          width: "max-content",
          "& > span": {
            whiteSpace: "nowrap",
          },
        },
      },
      toggleText: {
        textTransform: "initial",
        letterSpacing: "initial",
        color: "#80868C",
      },
      stepper: {
        padding: "40px 0 60px",
      },
      backButton: {
        minWidth: 250,
        textTransform: "capitalize!important",
      },
      nextBtn: {
        minWidth: 250,
        marginLeft: 12,
      },
      instructions: {
        minWidth: 250,
        textAlign: "center",
      },
      anim: {
        transition: "all 1s ease-in",
      },
      item: {
        display: "flex",
        width: "calc(50% - 20px)",
        flexWrap: "nowrap",
        alignItems: "flex-start",
        marginBottom: 50,
        "& > img": {
          marginBottom: 42,
          marginRight: 24,
          height: 60,
        },
      },
      tarifText: {
        marginTop: 24,
        marginBottom: 24,
      },
      link: {
        color: "#249052",
        textDecoration: "underline",
        cursor: "pointer",
      },
      calc: {
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        alignItems: "center",
        "& > div:first-child": {
          width: "calc(60% - 15px)",
        },
        "& > div:last-child": {
          width: "calc(40% - 15px)",
          background: "#FAFAFA",
          borderRadius: 8,
          padding: 24,
        },
      },
      paymentWrap: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        marginBottom: 60,
      },
      paymentWrapSec: {
        marginBottom: 0,
      },
      sliderWrap: {
        position: "relative",
        width: "100%",
        "& > div > div": {
          width: "100%",
        },
      },
      sliderRange: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -20,
        color: "#b3b6ba",
        display: "flex",
        justifyContent: "space-between",
        fontSize: 12,
      },
      tabsContent: {
        marginTop: 24,
      },
      input: {
        display: "block",
        width: "100%",
      },
      sumTitle: {
        marginBottom: 16,
      },
      sumText: {
        marginBottom: 24,
      },
      docs: {
        marginTop: 24,
        "& > div": {
          width: "calc(50% - 20px)",
          marginBottom: 40,
          display: "flex",
          flexWrap: "nowrap",
          alignItems: "center",
          "& > img": {
            marginRight: 24,
          },
        },
      },
      table: {
        "& > tr > td > tr": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        },
        "& > tr > td > tr td": {
          borderBottom: 0,
          padding: "16px 16px 0 0",
          "& tr:last-child > td": { padding: "0 16px 0 0" },
          "& td": {
            padding: "0 16px 16px 0",
          },
        },
      },
      tarifDoc: {
        display: "flex",
        alignItems: "center",
        marginBottom: 24,
        marginTop: 24,
        "& > img": {
          marginRight: 12,
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      item: {
        width: "100%",
      },
    },
  })
);

const Tabs = (props: any) => {
  const classes = useStyles({});
  const { t } = useTranslation();

  const [toggle, setToggle] = React.useState("overview");
  const [docToggle, setDocToggle] = React.useState("ip");

  return (
    <div className={classes.container} ref={props.refProp}>
      <BccToggleButtonGroup
        value={toggle}
        exclusive
        onChange={(e: any, next: any) => {
          next && setToggle(next);
        }}
        className={classes.toggleGroup}
      >
        <BccToggleButton value="overview">
          <BccTypography
            className={classes.toggleText}
            weight="medium"
            type="p2"
          >
            {t("tabs.1")}
          </BccTypography>
        </BccToggleButton>
        <BccToggleButton value="redemption">
          <BccTypography
            className={classes.toggleText}
            weight="medium"
            type="p2"
          >
            {t("tabs.2")}
          </BccTypography>
        </BccToggleButton>
        <BccToggleButton value="documents">
          <BccTypography
            className={classes.toggleText}
            weight="medium"
            type="p2"
          >
            {t("tabs.3")}
          </BccTypography>
        </BccToggleButton>
      </BccToggleButtonGroup>
      <div className={classes.tabsContent}>
        {toggle === "overview" ? (
          <Grid container direction="row" justify="space-between">
            <Grid item className={classes.item}>
              <img src={process.env.PUBLIC_URL + "/icons/idea.svg"} />
              <BccTypography
                type="p2"
                weight="bold"
                block
                className={classes.itemTitle}
              >
                {t("tabs.text1")}
              </BccTypography>
            </Grid>
            <Grid item className={classes.item}>
              <img src={process.env.PUBLIC_URL + "/icons/tengeu.svg"} />
              <BccTypography
                type="p2"
                weight="bold"
                block
                className={classes.itemTitle}
              >
                {t("tabs.text2")}
              </BccTypography>
            </Grid>
            <Grid item className={classes.item}>
              <img src={process.env.PUBLIC_URL + "/icons/period.svg"} />
              <BccTypography
                type="p2"
                weight="bold"
                block
                className={classes.itemTitle}
              >
                {t("tabs.text3")}
              </BccTypography>
            </Grid>
            <Grid item className={classes.item}>
              <img src={process.env.PUBLIC_URL + "/icons/tengee.svg"} />
              <BccTypography
                type="p2"
                weight="bold"
                block
                className={classes.itemTitle}
              >
                {t("tabs.text4")}
              </BccTypography>
            </Grid>
            <Grid item className={classes.item}>
              <img src={process.env.PUBLIC_URL + "/icons/contractt.svg"} />
              <BccTypography
                type="p2"
                weight="bold"
                block
                className={classes.itemTitle}
              >
                {t("tabs.text5")}
              </BccTypography>
            </Grid>
          </Grid>
        ) : toggle === "redemption" ? (
          <Grid container direction="row" justify="space-between">
            <Grid item className={classes.item}>
              <img src={process.env.PUBLIC_URL + "/icons/roundperd.svg"} />
              <BccTypography
                type="p2"
                weight="bold"
                block
                className={classes.itemTitle}
              >
                {t("tabs.2text1")}
              </BccTypography>
            </Grid>
            <Grid item className={classes.item}>
              <img src={process.env.PUBLIC_URL + "/icons/periodt.svg"} />
              <BccTypography
                type="p2"
                weight="bold"
                block
                className={classes.itemTitle}
              >
                {t("tabs.2text2")}
              </BccTypography>
            </Grid>
            <Grid item className={classes.item}>
              <img src={process.env.PUBLIC_URL + "/icons/givet.svg"} />
              <BccTypography
                type="p2"
                weight="bold"
                block
                className={classes.itemTitle}
              >
                {t("tabs.2text3")}
              </BccTypography>
            </Grid>
          </Grid>
        ) : toggle === "documents" ? (
          <>
            <BccToggleButtonGroup
              value={docToggle}
              exclusive
              onChange={(e: any, next: any) => {
                next && setDocToggle(next);
              }}
              className={classes.toggleGroup}
            >
              <BccToggleButton value="ip">
                <BccTypography
                  className={classes.toggleText}
                  weight="medium"
                  type="p2"
                >
                  {t("tabs.ip")}
                </BccTypography>
              </BccToggleButton>
              <BccToggleButton value="ul">
                <BccTypography
                  className={classes.toggleText}
                  weight="medium"
                  type="p2"
                >
                  {t("tabs.ul")}
                </BccTypography>
              </BccToggleButton>
            </BccToggleButtonGroup>
            {docToggle === "ip" ? (
              <Grid
                container
                justify="space-between"
                direction="column"
                className={classes.docs2}
              >
                <Grid item>
                  <img src={process.env.PUBLIC_URL + "/icons/pdf.svg"} />
                  <BccLink
                    target="_blank"
                    href={`https://www.bcc.kz/ip_${
                      props.lang === "ru"
                        ? "rus"
                        : props.lang === "kz"
                        ? "kaz"
                        : "eng"
                    }.pdf`}
                  >
                    {t("tabs.doc1")}
                  </BccLink>
                </Grid>
              </Grid>
            ) : (
              <Grid container justify="space-between" className={classes.docs4}>
                <Grid item></Grid>
                <Grid container direction="column">
                  <Grid item>
                    <img src={process.env.PUBLIC_URL + "/icons/pdf.svg"} />
                    <BccLink
                      target="_blank"
                      href={`https://www.bcc.kz/too_${
                        props.lang === "ru"
                          ? "rus"
                          : props.lang === "kz"
                          ? "kaz"
                          : "eng"
                      }.pdf`}
                    >
                      {t("tabs.doc1")}
                    </BccLink>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Tabs;
