import React from "react";
import UseAnimations from "react-useanimations";
import alertTriangle from "react-useanimations/lib/alertTriangle";
function ErrorPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center flex-col">
        <UseAnimations size={100} animation={alertTriangle} />
        <p className="font-bold text-red-600 text-xl">
          Ocorreu um erro com servidor
        </p>
        <p className="font-semibold">Contacte o administrador</p>
        <p className="text-sm underline">dev.varlson@gmail.com</p>
      </div>
    </div>
  );
}

export default ErrorPage;
