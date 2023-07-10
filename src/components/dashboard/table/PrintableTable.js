import {
  Card,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'

const PrintableTable = ({ orderData }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  console.log('orderData', orderData)
  /**
   * This function prints the contents of a specific HTML element and restores the original contents
   * of the page after printing.
   */
  const printDiv = () => {
    if (typeof window !== 'undefined') {
      let printContents = document.getElementById('download_section').innerHTML
      let originalContents = document.body.innerHTML
      document.body.innerHTML = printContents
      window.print()
      document.body.innerHTML = originalContents
    }
  }

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      printDiv()
    }
  }, [isLoaded])

  return (
    <>
      <Card className="invoice_popup" id="download_section">
        <img
          className="w-[200px] pl-[30px]"
          src="/static/brand/aymi-logo.png"
          alt=""
        />
        <h6 className="sub_name">Client Management Solutions</h6>
        <div className="invoice_header_wrapper">
          <h1 class="invoice_header">INVOICE</h1>
        </div>

        <div className="inv_id_section">
          {/* <Typography variant='body2' sx={{ fontWeight: 600, fontSize: 18, color: '#000' }}>
                        Invoice ID : {clientData?.wrapper?.uniqueClientId}
                    </Typography>
                    <Typography variant='body2' sx={{ fontWeight: 600, fontSize: 18, color: '#000', textAlign: 'right' }}>
                        Date: {new Date().toLocaleDateString('en-US')}
                    </Typography> */}
          <div className="invoice_to_left">
            <h3>Invoice to:</h3>
            <h3 className="client_name">Ayon Jodder</h3>

            <h5>Contact: 5654657567</h5>

            <h5>Email: sgdfgdgdhd@</h5>

            <h5>Address: fghfghfd</h5>
          </div>
          <div className="invoice_id_section_right">
            <div className="invoice_id invoice_id_top">
              <h3 className="invoice_id_header">Invoice ID</h3>
              <h5>5675675677</h5>
            </div>
            <div className="invoice_id">
              <h3 className="invoice_id_header">Date</h3>
              <h5 className="invoice_date">
                {new Date().toLocaleDateString('en-US')}
              </h5>
            </div>
          </div>
        </div>

        <Grid
          sx={{ marginBottom: 15, paddingLeft: 10, paddingRight: 10 }}
          container
          spacing={5}
        >
          <Grid item xs={12}>
            {/* <TableContainer> */}
            <Table
              className="invoice_table"
              // sx={{ minWidth: 800 }}
              aria-label="table in dashboard"
            >
              <TableHead className="invoice_table_head">
                <TableRow>
                  <TableCell className="table_cell_no_border" align="left">
                    Serial
                  </TableCell>
                  <TableCell className="table_cell_no_border" align="center">
                    Service Name
                  </TableCell>
                  <TableCell className="table_cell_no_border" align="center">
                    Service Amount
                  </TableCell>
                  <TableCell className="table_cell_no_border" align="center">
                    Paid Amount
                  </TableCell>
                  <TableCell className="table_cell_no_border" align="right">
                    Due Amount
                  </TableCell>
                </TableRow>
              </TableHead>
              {/* <TableBody>
                  {clientData?.wrapper?.formData?.serviceArr?.map(
                    (service, index) => (
                      <TableRow>
                        <TableCell align="left">
                          <Typography>{index + 1}</Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography>
                            {service.charAt(0).toUpperCase() + service.slice(1)}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography>
                            {service === 'visa' &&
                              clientData?.wrapper?.formData?.visaPaymentAmount}
                            {service === 'reservation' &&
                              clientData?.wrapper?.formData
                                ?.reservationPaymentAmount}
                            {service === 'insurance' &&
                              clientData?.wrapper?.formData
                                ?.healthInsurancePaymentAmount}
                            {service === 'hotel' &&
                              clientData?.wrapper?.formData?.hotelPaymentAmount}
                            {service === 'transport' &&
                              clientData?.wrapper?.formData
                                ?.localTransportPaymentAmount}
                            {service === 'airportMeet' &&
                              clientData?.wrapper?.formData
                                ?.airportPaymentAmount}
                            {service === 'airAmbulance' &&
                              clientData?.wrapper?.formData
                                ?.airAmbulancePaymentAmount}
                            {service === 'doctorOPD' &&
                              clientData?.wrapper?.formData?.opdPaymentAmount}
                            {service === 'doctorIPD' &&
                              clientData?.wrapper?.formData?.ipdPaymentAmount}
                            {service === 'telemedicine' &&
                              clientData?.wrapper?.formData
                                ?.telimedeicinePaymentAmount}
                            {service === 'treatmentPlan' &&
                              clientData?.wrapper?.formData
                                ?.treatmentPlanPaymentAmount}
                            {service === 'excursion' &&
                              clientData?.wrapper?.formData
                                ?.excursionPaymentAmount}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography>
                            {service === 'visa' &&
                              clientData?.wrapper?.formData?.visapaidAmount}
                            {service === 'reservation' &&
                              clientData?.wrapper?.formData
                                ?.reservationpaidAmount}
                            {service === 'insurance' &&
                              clientData?.wrapper?.formData
                                ?.healthInsurancepaidAmount}
                            {service === 'hotel' &&
                              clientData?.wrapper?.formData?.hotelpaidAmount}
                            {service === 'transport' &&
                              clientData?.wrapper?.formData
                                ?.localTransportpaidAmount}
                            {service === 'airportMeet' &&
                              clientData?.wrapper?.formData?.airportpaidAmount}
                            {service === 'airAmbulance' &&
                              clientData?.wrapper?.formData
                                ?.airAmbulancepaidAmount}
                            {service === 'doctorOPD' &&
                              clientData?.wrapper?.formData?.opdpaidAmount}
                            {service === 'doctorIPD' &&
                              clientData?.wrapper?.formData?.ipdpaidAmount}
                            {service === 'telemedicine' &&
                              clientData?.wrapper?.formData
                                ?.telimedeicinepaidAmount}
                            {service === 'treatmentPlan' &&
                              clientData?.wrapper?.formData
                                ?.treatmentPlanpaidAmount}
                            {service === 'excursion' &&
                              clientData?.wrapper?.formData
                                ?.excursionpaidAmount}
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography>
                            {service === 'visa' &&
                              clientData?.wrapper?.formData?.visaDueAmount}
                            {service === 'reservation' &&
                              clientData?.wrapper?.formData
                                ?.reservationDueAmount}
                            {service === 'insurance' &&
                              clientData?.wrapper?.formData
                                ?.healthInsuranceDueAmount}
                            {service === 'hotel' &&
                              clientData?.wrapper?.formData?.hotelDueAmount}
                            {service === 'transport' &&
                              clientData?.wrapper?.formData
                                ?.localTransportDueAmount}
                            {service === 'airportMeet' &&
                              clientData?.wrapper?.formData?.airportDueAmount}
                            {service === 'airAmbulance' &&
                              clientData?.wrapper?.formData
                                ?.airAmbulanceDueAmount}
                            {service === 'doctorOPD' &&
                              clientData?.wrapper?.formData?.opdDueAmount}
                            {service === 'doctorIPD' &&
                              clientData?.wrapper?.formData?.ipdDueAmount}
                            {service === 'telemedicine' &&
                              clientData?.wrapper?.formData
                                ?.telimedeicineDueAmount}
                            {service === 'treatmentPlan' &&
                              clientData?.wrapper?.formData
                                ?.treatmentPlanDueAmount}
                            {service === 'excursion' &&
                              clientData?.wrapper?.formData?.excursionDueAmount}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody> */}
            </Table>
            {/* </TableContainer> */}
            <div className="invoice_footer">
              <div className="left_footer_section">
                <h5 className="footer_header">Thank you for your business</h5>
                <div>
                  <h5 className="footer_header">Terms & Conditions</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam, corporis.
                  </p>
                </div>
              </div>
              <div className="right_footer_section">
                <div className="sub_total_wrapper">
                  <h4 className="sub_total">Total : 100</h4>
                  <h4 className="sub_total">Delivery Fee : 100</h4>
                  <h4 className="sub_total">Subtotal : 100</h4>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        <div className="footer_border_wrapper">
          <h5 className="authorized_sign">Authorized Sign</h5>
        </div>
      </Card>
    </>
  )
}

export default PrintableTable
