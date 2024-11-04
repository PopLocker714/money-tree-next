export default function getExpAuthTime() {
  return new Date(Date.now() + Number(process.env.AUTH_EXP_TIME) * 1000);
}
