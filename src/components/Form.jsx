import { useForm } from "react-hook-form";
import { TextField, Button, Box, Grid, Modal, Typography } from "@mui/material";
import { generateAiResponse } from "../services/aiApi";
import { useState } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Form = () => {
  const [isOpenedModal, openModal] = useState(false);
  const [response, setResponse] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleOpen = () => openModal(true);
  const handleClose = () => openModal(false);
  const onSubmit = async (data) => {
    const intro = await generateAiResponse(data);
    setResponse(intro);
    handleOpen();
  };
  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{ mt: 3 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="fullName"
              label="Full Name"
              {...register("fullName", { required: true })}
              error={!!errors.fullName}
              helperText={errors.fullName ? "Full name is required" : ""}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="birthDate"
              label="Date of Birth"
              type="date"
              InputLabelProps={{ shrink: true }}
              {...register("birthDate", { required: true })}
              error={!!errors.birthDate}
              helperText={errors.birthDate ? "Date of birth is required" : ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="residentialAddress"
              label="Residential Address"
              {...register("residentialAddress", { required: true })}
              error={!!errors.residentialAddress}
              helperText={
                errors.residentialAddress
                  ? "Residential address is required"
                  : ""
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="contactInfo"
              label="Contact Information"
              {...register("contactInfo", { required: true })}
              error={!!errors.contactInfo}
              helperText={
                errors.contactInfo ? "Contact information is required" : ""
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="govID"
              label="Government-issued ID"
              {...register("govID", { required: true })}
              error={!!errors.govID}
              helperText={
                errors.govID ? "Government-issued ID is required" : ""
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="ssn"
              label="Social Security Number (SSN)"
              {...register("ssn", { required: true })}
              error={!!errors.ssn}
              helperText={
                errors.ssn ? "Social Security Number is required" : ""
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="employmentStatus"
              label="Employment Status"
              {...register("employmentStatus", { required: true })}
              error={!!errors.employmentStatus}
              helperText={
                errors.employmentStatus ? "Employment status is required" : ""
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="monthlyIncome"
              label="Monthly Income"
              type="number"
              {...register("monthlyIncome", { required: true })}
              error={!!errors.monthlyIncome}
              helperText={
                errors.monthlyIncome ? "Monthly income is required" : ""
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="bankAccountInfo"
              label="Bank Account Information"
              {...register("bankAccountInfo", { required: true })}
              error={!!errors.bankAccountInfo}
              helperText={
                errors.bankAccountInfo
                  ? "Bank account information is required"
                  : ""
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="proofOfAddress"
              label="Proof of Address"
              {...register("proofOfAddress", { required: true })}
              error={!!errors.proofOfAddress}
              helperText={
                errors.proofOfAddress ? "Proof of address is required" : ""
              }
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
      </Box>
      {isOpenedModal && (
        <Modal
          open={isOpenedModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {response.text}
            </Typography>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default Form;
