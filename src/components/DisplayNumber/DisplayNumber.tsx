// GetToken.js
import React, { useState, useEffect } from "react";
import { getAccessToken, getPhoneNumber } from "zmp-sdk/apis";
import axios from "axios";

interface TokenData {
  token: string;
}

const GetToken = ({ onPhoneNumberReceived }) => {
  const [accessToken, setAccessToken] = useState("");
  const [phoneNumberToken, setPhoneNumberToken] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    const getTokens = async () => {
      try {
        const accessTokenData = await getAccessToken({});
        setAccessToken(accessTokenData as unknown as string);
      } catch (error) {
        console.log("Error getting access token:", error);
      }

      try {
        const phoneNumberData: TokenData = await getPhoneNumber({});
        const { token } = phoneNumberData;
        setPhoneNumberToken(token);
      } catch (error) {
        console.log("Error getting phone number:", error);
      }
    };

    getTokens();
  }, []);

  useEffect(() => {
    if (accessToken && phoneNumberToken) {
      const sendTokensToBackend = async () => {
        try {
          const response = await axios.post(
            "https://sv-bvm-trianh2.onrender.com/get-phone-number",
            {
              accessToken,
              phoneNumberToken,
            }
          );

          setPhoneNumber(response.data.phoneNumber);
          onPhoneNumberReceived(response.data.phoneNumber); // Truyền giá trị phoneNumber lên component cha
        } catch (error) {
          console.error("Error sending tokens to backend:", error);
        }
      };

      sendTokensToBackend();
    }
  }, [accessToken, phoneNumberToken]);

  return <div>{/* Nội dung của component GetToken */}</div>;
};

export default GetToken;
