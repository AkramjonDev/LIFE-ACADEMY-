import React from "react";
import { useState, useEffect } from "react";
const Chat = () => {
  useEffect(() => {
    window.replainSettings = { id: "195c250a-f486-46e9-9f31-5850855db6c4" };
    (function (u) {
      var s = document.createElement("script");
      s.async = true;
      s.src = u;
      var x = document.getElementsByTagName("script")[0];
      x.parentNode.insertBefore(s, x);
    })("https://widget.replain.cc/dist/client.js");

    const script = document.createElement("script");
    script.src = "YOUR_REPLAIN_WIDGET_CODE_URL";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>

    </div>
  );
};

export default Chat;
