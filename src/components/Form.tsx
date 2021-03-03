import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { Snackbar, Grid, MenuItem } from "@material-ui/core";
import { Alert as MuiAlert } from "@material-ui/lab";
import BlockUi from "react-block-ui";
import InputMask from "react-input-mask";
import {
  BccTypography,
  BccCheckbox,
  BccInput,
  BccRadio,
  BccRadioGroup,
  BccButton,
  BccFormControl,
  BccFormControlLabel,
  BccLink,
  BccSlider,
} from "./BccComponents";

const data = require("../data.json");

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      outerContainer: {
        background: "#fafafa",
      },
      container: {
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "20px",
      },
      title: {
        marginBottom: 40,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 28,
        lineHeight: "33px",
        color: "#141414",
      },

      orderNum: {
        color: "#249052",
        paddingRight: 10,
        borderRight: ".5px solid rgba(20, 20, 20, .7)",
      },
      orderNumTitle: {
        paddingLeft: 10,
        color: "#141414",
      },
      orderNumText: {
        marginTop: 20,
        opacity: 0.7,
      },
      item: {
        width: "100%",
        marginBottom: 30,
      },

      stepsBlock: {
        marginBottom: 80,
      },
      orderForm: {
        width: "100%",
        textAlign: "left",
        background: "#FFFFFF",
        border: "1px solid #B9B9B9",
        borderRadius: 8,
      },
      innerOrderForm: {
        padding: "30px 20px",
      },
      titleForm: {
        marginBottom: 20,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 24,
        lineHeight: "28px",
        color: "#141414",
      },
      subTitleForm: {
        marginBottom: 40,
        opacity: 0.7,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        lineHeight: "19px",
        color: "#141414",
      },
      inputStyle: {
        marginBottom: 30,
        textAlign: "left",
      },
      checkboxText: {
        alignItems: "flex-start",
        marginBottom: 20,
        marginTop: 15,
      },
      btnWrap: {
        width: "100%",
        "& > button": { width: "100%", marginBottom: 15 },
      },
      icon: {
        width: "18px",
        height: "19px",
      },
      garant: { textAlign: "left", marginBottom: 16 },
    },
    [theme.breakpoints.between("md", "xl")]: {
      outerContainer: {
        background: "#fafafa",
      },
      container: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "80px 100px",
      },
      title: {
        marginBottom: 40,
      },
      orderNum: {
        color: "#249052",
        paddingRight: 10,
        borderRight: ".5px solid rgba(20, 20, 20, .7)",
      },
      orderNumTitle: {
        paddingLeft: 10,
        color: "#141414",
      },
      orderNumText: {
        marginTop: 20,
        opacity: 0.7,
      },
      item: {
        width: "calc(33% - 20px)",
      },
      stepsBlock: {
        marginBottom: 80,
      },
      orderForm: {
        width: "50%",
        maxWidth: "50%",
        margin: "0 auto",
        textAlign: "center",
      },
      titleForm: {
        marginBottom: 20,
      },
      subTitleForm: {
        marginBottom: 40,
        opacity: 0.7,
      },
      inputStyle: {
        marginBottom: 30,
        textAlign: "left",
      },
      checkboxText: {
        marginBottom: 20,
        marginTop: 15,
        "& > div:last-child": {
          marginLeft: 20,
          textAlign: "left",
        },
      },
      btnWrap: {
        width: "calc(50% - 10px)",
        "& > button": { width: "100%" },
      },
      icon: {
        width: "18px",
        height: "19px",
      },
      garant: { textAlign: "left" },
      radio: {
        marginBottom: 30,
      },
    },
    timer: {
      fontSize: 16,
      color: "#4D565F",
    },
    sumInput: {
      "& > div": {
        borderColor: "#f44336!important",
      },
      "& > p": {
        position: "absolute",
        bottom: -40,
        color: "#f44336",
      },
    },
    linkReSendSms: {
      color: "#3F0259",
      fontSize: 16,
      height: "auto",
      padding: 0,
      lineHeight: "initial",
      cursor: "pointer",
      textTransform: "none",
      "&:hover, &:active": {
        textDecoration: "underline",
        opacity: 0.8,
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
    code: {
      margin: 0,
      "& input": {
        height: 62,
        boxSizing: "border-box",
      },
    },
    paymentWrap: {
      position: "relative",
      marginBottom: 40,
    },
    sliderWrap: {
      position: "relative",
      width: "100%",
    },
    input: {
      display: "block",
      width: "100%",
      "& > div": {
        width: "inherit",
      },
    },
    okBtn: {
      minWidth: 160,
    },
  })
);

const Alert = (props: any) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

const BccMaskedInput = (props: TextMaskCustomProps) => {
  const { inputRef, ...other } = props;

  return (
    <InputMask
      {...other}
      ref={(ref: any) => inputRef(ref ? ref.inputElement : null)}
      mask="+7(999) 999 99 99"
      maskChar=""
      placeholder={"+7(707) 707 77 77"}
    />
  );
};

const initValue = () => ["6", "12", "24", "36"];

const Form = (props: any) => {
  const classes = useStyles({});
  const { t, i18n } = useTranslation();

  // Залоговый 0 + , Без залоговый 1 useState(0)
  const [step, setStep] = React.useState(0);
  const [type, setType] = React.useState("0");
  const [fio, setFio] = React.useState("");
  const [iinBin, setIinBin] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [sum, setSum] = React.useState("");
  const [minSum, setMinSum] = React.useState(100000);
  const [maxSum, setMaxSum] = React.useState(50000000000);
  const [period, setPeriod] = React.useState(initValue);
  const [selectedPeriod, setSelectedPeriod] = React.useState("");
  const [city, setCity] = React.useState("");
  const [agree, setAgree] = React.useState(true);
  const [otpCode, setOtpCode] = React.useState("");

  // Validation
  const [fioErr, setFioErr] = React.useState(false);
  const [iinBinErr, setIinBinErr] = React.useState(false);
  const [phoneErr, setPhoneErr] = React.useState<boolean>(false);
  const [emailErr, setEmailErr] = React.useState<boolean>(false);
  const [sumErr, setSumErr] = React.useState<boolean>(false);
  const [timer, setTimer] = React.useState(0);
  const [openErr, setOpenErr] = React.useState(false);
  const handleClose = () => {
    setOpenErr(true);
  };

  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    let timeOut = setInterval(() => {
      if (timer !== 0) {
        setTimer(timer - 1);
      }
    }, 1000);
    return () => clearInterval(timeOut);
  }, [timer]);

  const formatPhoneNumber = () => {
    let res = phone;
    if (phone.slice(0, 1) === "8") res = "+7" + phone.slice(1);
    return res.replace(/\(|\)| /g, "");
  };

  const validation = () => {
    let temp = false;

    if (fio.length < 5) {
      setFioErr(true);
      temp = true;
    } else setFioErr(false);

    if (+sum < minSum) {
      setSumErr(true);
      temp = true;
    } else setSumErr(false);

    if (!/.+@.+\.[A-Za-z]+$/.test(email)) {
      setEmailErr(true);
      temp = true;
    } else setEmailErr(false);

    if (phone.length !== 17 || phone.substr(3, 1) !== "7") {
      setPhoneErr(true);
      temp = true;
    } else setPhoneErr(false);

    return temp ? false : true;
  };

  const isValid = () => {
    if (step === 0) {
      return (
        fio !== "" &&
        iinBin.replace(/ /g, "").length === 12 &&
        phone.replace("_", "").length === 17 &&
        email !== "" &&
        sum !== "" &&
        selectedPeriod !== "" &&
        city !== "" &&
        agree !== false
      );
    } else if (step === 1) return otpCode.length === 6;
    else return true;
  };

  const startProcess = () => {
    // api.camunda
    //   .start({
    //     env: {
    //       production: webConfigEnv.PRODUCTION === "1",
    //     },
    //     ...new GrowingBusinessBaseModel(),
    //     requestInfo: {
    //       type,
    //       zalog: !!+zalog,
    //       fio: fio,
    //       iin: iin,
    //       phone: formatPhoneNumber(),
    //       email: email,
    //       lang: i18n.language,
    //       amount: sum,
    //       period: period,
    //       city: city,
    //       utm_source: getUrlParameter("utm_source"),
    //       utm_medium: getUrlParameter("utm_medium"),
    //       utm_campaign: getUrlParameter("utm_campaign"),
    //       utm_term: getUrlParameter("utm_term"),
    //       utm_content: getUrlParameter("utm_content"),
    //       utm_keyword: getUrlParameter("utm_keyword"),
    //     },
    //   })
    //   .then((userContext) => {
    //     localStorage.setItem("processInstanceId", JSON.stringify(userContext));
    //     setProcessInstanceId(userContext.processInstanceId);
    //     setStep(2);
    //     props.scrollToOrder(false);
    //     setLoading(false);
    //   })
    //   .catch((e: any) => {
    //     console.error(e);
    //     setOpenError(true);
    //     setLoading(false);
    //   });
  };

  const onSubmitOtp = () => {
    // setLoading(true);
    // api.authOtp
    //   .confirmOtp({
    //     iin: iin,
    //     phone: formatPhoneNumber(),
    //     otp: code,
    //   })
    //   .then((userContext) => {
    //     props.scrollToOrder(false);
    //     localStorage.setItem("userContext", JSON.stringify(userContext));
    //     setToken(String(userContext.token?.accessToken));
    //     localStorage.removeItem("processInstanceId");
    //     startProcess();
    //   })
    //   .catch((e: any) => {
    //     props.scrollToOrder(false);
    //     console.error(e);
    //     setOpenError(true);
    //     setLoading(false);
    //   });
  };

  const getOtp = () => {
    // if (!validate()) return;
    // setLoading(true);
    // setTimer(90);
    // api.authOtp
    //   .sendOtp({ iin: iin, phone: formatPhoneNumber() })
    //   .then(() => {
    //     localStorage.removeItem("userContext");
    //     setStep(1);
    //     props.scrollToOrder(false);
    //     setLoading(false);
    //   })
    //   .catch((e: any) => {
    //     console.error(e);
    //     props.scrollToOrder(false);
    //     setOpenError(true);
    //     setLoading(false);
    //   });

    setLoading(true);
    setTimer(90);
    setStep(1);
  };

  const onResend = () => {
    // setLoading(true);
    // api.authOtp
    //   .sendOtp({ iin: iin, phone: formatPhoneNumber() })
    //   .then(() => {
    //     props.scrollToOrder(false);
    //     setTimer(90);
    //     setCode("");
    //     setLoading(false);
    //   })
    //   .catch((e: any) => {
    //     console.error(e);
    //     props.scrollToOrder(false);
    //     setOpenError(true);
    //     setLoading(false);
    //   });
    setTimer(90);
    setOtpCode("");
    setLoading(false);
  };

  return (
    <div className={classes.outerContainer} ref={props.refProp}>
      <div className={classes.container}>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={openErr}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="error">
            Возникла непредвиденная ошибка!
          </Alert>
        </Snackbar>
        <div className={classes.orderForm}>
          <Grid direction="column" container className={classes.innerOrderForm}>
            <BlockUi tag="div" blocking={isLoading}>
              {step === 0 ? (
                <React.Fragment>
                  <Grid item>
                    <BccTypography
                      type="h2"
                      weight="medium"
                      block
                      className={classes.titleForm}
                    >
                      {t("order.title")}
                    </BccTypography>
                    <BccTypography
                      type="p1"
                      weight="medium"
                      block
                      className={classes.subTitleForm}
                    >
                      {t("order.subtitle")}
                    </BccTypography>
                  </Grid>
                  <Grid item>
                    <BccFormControl className={classes.radio}>
                      <BccRadioGroup
                        value={type}
                        row
                        onChange={(e: any) => {
                          if (e.target.value === "0") {
                            setSelectedPeriod("");
                            setCity("");
                            setPeriod(initValue);
                            setSum("100000");
                            setMinSum(100000);
                            setMaxSum(50000000000);
                          } else {
                            setSelectedPeriod("");
                            setCity("");
                            setPeriod(initValue);
                            setSum("150000");
                            setMinSum(150000);
                            setMaxSum(60000000000);
                            setPeriod((oldArray) => [...oldArray, "72"]);
                          }
                          setType(e.target.value);
                        }}
                      >
                        <BccFormControlLabel
                          value="0"
                          control={<BccRadio disableRipple />}
                          label={t("order.ip")}
                          labelPlacement="end"
                        />
                        <BccFormControlLabel
                          value="1"
                          control={<BccRadio disableRipple />}
                          label={t("order.ul")}
                          labelPlacement="end"
                        />
                      </BccRadioGroup>
                    </BccFormControl>
                  </Grid>
                  <Grid item>
                    <BccInput
                      className={classes.inputStyle}
                      fullWidth
                      label={
                        type === "0"
                          ? `${t("order.fioUl")}`
                          : `${t("order.fioIp")}`
                      }
                      variant="filled"
                      id="fio"
                      name="fio"
                      helperText={fioErr ? t("order.errFio") : ""}
                      error={fioErr ? true : false}
                      value={fio}
                      onChange={(e: any) => {
                        setFio(e.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <BccInput
                      fullWidth={true}
                      className={classes.inputStyle}
                      label={
                        type === "1"
                          ? `${t("order.bin")}*`
                          : `${t("order.iin")}*`
                      }
                      id="iinBin"
                      name="iinBin"
                      helperText={
                        iinBinErr && type === "1"
                          ? `${t("order.error1")} ${t("order.bin")}`
                          : iinBinErr
                          ? `${t("order.error1")} ${t("order.iin")}`
                          : ""
                      }
                      error={iinBinErr ? true : false}
                      value={iinBin}
                      onChange={(e: any) => {
                        setIinBin(
                          e.target.value.replace(/\D/g, "").substr(0, 12)
                        );
                      }}
                      variant="filled"
                    />
                  </Grid>
                  <Grid item>
                    <BccInput
                      variant="filled"
                      fullWidth
                      label={t("order.phone") + "*"}
                      onChange={(e: any) => {
                        setPhone(e.target.value);
                        phoneErr && validation();
                      }}
                      className={classes.inputStyle}
                      id="phone"
                      name="phone"
                      value={phone}
                      helperText={phoneErr ? t("order.errPhone") : ""}
                      error={phoneErr ? true : false}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      InputProps={{
                        inputComponent: BccMaskedInput as any,
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <BccInput
                      fullWidth={true}
                      className={classes.inputStyle}
                      label={t("order.email") + "*"}
                      id="email"
                      name="email"
                      helperText={emailErr ? `${t("order.errEmail")}` : ""}
                      error={emailErr ? true : false}
                      value={email}
                      onChange={(e: any) => {
                        setEmail(e.target.value);
                      }}
                      variant="filled"
                    />
                  </Grid>
                  <Grid item>
                    <div
                      className={classes.paymentWrap}
                      style={{ marginBottom: sumErr ? 60 : 40 }}
                    >
                      <div className={classes.sliderWrap}>
                        <BccInput
                          label={t("order.sum")}
                          key="sum"
                          variant="filled"
                          value={`${sum.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}${
                            sum !== "" ? " ₸" : ""
                          }`}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          helperText={
                            sumErr
                              ? `${t("order.errSum") +
                                  minSum.toLocaleString() +
                                  " ₸"}`
                              : ""
                          }
                          onFocus={() => setSum("")}
                          onChange={(e: any) => {
                            const s = +e.target.value.replace(/\D/g, "");
                            if (s > maxSum) setSum(maxSum.toString());
                            else setSum(s.toString());
                          }}
                          className={`${classes.input} ${
                            sumErr ? classes.sumInput : ""
                          }`}
                        />
                        <BccSlider
                          style={{
                            left: 6,
                            right: 6,
                            width: "calc(100% - 12px)",
                            bottom: -1,
                            padding: 0,
                            position: "absolute",
                          }}
                          min={minSum}
                          max={maxSum}
                          step={5}
                          value={+sum}
                          valueLabelDisplay="off"
                          defaultValue={+sum}
                          onChange={(e: any, val: any) =>
                            setSum(
                              val instanceof Array
                                ? val[1].toString()
                                : val.toString()
                            )
                          }
                        />
                        <div className={classes.sliderRange}>
                          <span>{minSum.toLocaleString()}</span>
                          <span>{maxSum.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item>
                    <BccInput
                      fullWidth={true}
                      className={classes.inputStyle}
                      label={`${t("order.period")}*`}
                      id="period"
                      name="period"
                      value={selectedPeriod}
                      onChange={(e: any) => setSelectedPeriod(e.target.value)}
                      variant="outlined"
                      select
                    >
                      {period.map((val) => (
                        <MenuItem value={val}>
                          {val + " " + t("order.month")}
                        </MenuItem>
                      ))}
                    </BccInput>
                  </Grid>
                  <Grid item>
                    <BccInput
                      fullWidth={true}
                      className={classes.inputStyle}
                      label={t("order.city") + "*"}
                      id="city"
                      name="city"
                      value={city}
                      onChange={(e: any) => setCity(e.target.value)}
                      variant="outlined"
                      select
                    >
                      {data
                        .filter(
                          (d: any, index: number, self: any) =>
                            index ===
                            self.findIndex((dd: any) => dd.city === d.city)
                        )
                        .map((c: any, i: number) => (
                          <MenuItem value={c.city} key={i}>
                            {c.city}
                          </MenuItem>
                        ))}
                    </BccInput>
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      justify="space-between"
                      wrap="nowrap"
                      className={classes.checkboxText}
                    >
                      <Grid item>
                        <BccCheckbox
                          value="remember"
                          color="primary"
                          checked={agree}
                          onChange={() => setAgree(!agree)}
                        />
                      </Grid>
                      <Grid item>
                        <BccTypography type="p3">
                          {t("order.agree")}{" "}
                          <BccLink
                            href={`http://bcc.kz/consent_${
                              props.lang === "ru"
                                ? "rus"
                                : props.lang === "kz"
                                ? "kaz"
                                : "eng"
                            }.pdf`}
                            target="_blank"
                          >
                            {t("order.agree1")}
                          </BccLink>
                        </BccTypography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container justify="space-between">
                      <Grid item className={classes.btnWrap}>
                        <Grid container spacing={2}>
                          <Grid item>
                            <img
                              src={process.env.PUBLIC_URL + "icons/safety.svg"}
                              className={classes.icon}
                              alt="order_security"
                            />
                          </Grid>
                          <Grid
                            item
                            xl={true}
                            lg={true}
                            md={true}
                            sm={true}
                            xs={true}
                          >
                            <BccTypography type="p3" className={classes.garant}>
                              {t("order.safety")}
                            </BccTypography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item className={classes.btnWrap}>
                        <BccButton
                          variant="contained"
                          disabled={!isValid()}
                          onClick={() =>
                            !validation() ? validation() : getOtp()
                          } //getOtp()}
                          color="primary"
                        >
                          {t("order.apply")}
                        </BccButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </React.Fragment>
              ) : step === 1 ? (
                <React.Fragment>
                  <Grid item>
                    <BccTypography
                      type="h2"
                      weight="medium"
                      block
                      className={classes.titleForm}
                    >
                      {t("order.title")}
                    </BccTypography>
                    <BccTypography
                      type="p1"
                      weight="medium"
                      block
                      className={classes.subTitleForm}
                    >
                      {t("order.subtitle")}
                    </BccTypography>
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      style={{ marginTop: "15px", alignItems: "center" }}
                      spacing={4}
                    >
                      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <BccInput
                          variant="outlined"
                          className={classes.code}
                          margin="normal"
                          fullWidth
                          id="code"
                          name="code"
                          value={otpCode}
                          onChange={(e: any) =>
                            setOtpCode(
                              e.target.value.replace(/\D/g, "").substr(0, 6)
                            )
                          }
                          label={t("order.code")}
                        />
                      </Grid>
                      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <BccButton
                          // onClick={() => onSubmitOtp()}
                          variant="contained"
                          className={classes.submit}
                          disabled={!isValid()}
                        >
                          Отправить
                        </BccButton>
                      </Grid>
                      {timer !== 0 ? (
                        <Grid item>
                          <BccTypography type="p3" className={classes.timer}>
                            {t("order.resend")} ({timer})
                          </BccTypography>
                        </Grid>
                      ) : (
                        <Grid item>
                          <BccButton
                            variant="text"
                            className={classes.linkReSendSms}
                            onClick={() => onResend()}
                          >
                            {t("order.sendAgain")}
                          </BccButton>
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                </React.Fragment>
              ) : step === 2 ? (
                <Grid item>
                  <div className={classes.successForm}>
                    <img src="icons/success.svg" alt="" />
                    <BccTypography block mb="16px" type="h5">
                      {t("order.succesTitle")}
                    </BccTypography>
                    <BccTypography block type="p2l" mb="16px">
                      {t("order.succesSubTitle")}
                    </BccTypography>
                    <BccTypography block type="p2l" mb="16px">
                      {t("order.succesText")}
                    </BccTypography>
                    <BccButton
                      // href={`https://green.bcc.kz/login?processInstanceId=${processInstanceId}&taskDefinitionKey=application_form&token=${token}`}
                      variant="contained"
                      color="primary"
                      className={classes.okBtn}
                    >
                      {t("order.ok")}
                    </BccButton>
                  </div>
                </Grid>
              ) : (
                ""
              )}
            </BlockUi>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Form;
