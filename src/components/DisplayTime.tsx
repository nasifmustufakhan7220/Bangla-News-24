"use client"

const DisplayTime = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
      dateStyle: "full",
    });
    return <span>{date}</span>;
};

export default DisplayTime;