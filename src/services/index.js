export function pendulum(prmLongCuerda, prmGravedad, prmPosIni, prmVelIni) {
    let varPhi;
    let varTheta0
    const varW = Math.sqrt(prmGravedad / prmLongCuerda);
    const varT = 2 * Math.PI * Math.sqrt(prmLongCuerda / prmGravedad);
    const varF = varW / (2 * Math.PI);

    let varPhi1 = Math.atan(prmVelIni / (-1 * varW * prmPosIni));
    varPhi1 = Math.abs(varPhi1);

    if (prmPosIni >= 0 && prmVelIni >= 0) {
        varPhi = 2 * Math.PI - varPhi1;
    }
    if (prmPosIni < 0 && prmVelIni >= 0) {

        varPhi = Math.PI + varPhi1;
    }
    if (prmPosIni < 0 && prmVelIni < 0) {
        varPhi = Math.PI - varPhi1;
    }
    if (prmPosIni >= 0 && prmVelIni < 0) {
        varPhi = varPhi1;
    }
    varTheta0 = (prmPosIni) / Math.cos(varPhi);

    return {
            frecuenciaNatural: varW.toFixed(2),//rad/seg
            periodo: varT.toFixed(2),//s
            frecuencia: varF.toFixed(2),//hz
            desfase: varPhi.toFixed(2),//rad
            amplitud: varTheta0.toFixed(2)//ang
   
    }

}
