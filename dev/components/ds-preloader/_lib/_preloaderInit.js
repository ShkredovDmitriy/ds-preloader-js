import setPreloaderColor from "./_setPreloaderColor";
import setCounterColor from "./_setCounterColor";
import preloaderCreate from "./_preloaderCreate";
import preloaderOpen from "./_preloaderOpen";
import preloaderCounter from "./_preloaderCounter";
import preloaderClose from "./_preloaderClose";
import preloaderRemove from "./_preloaderRemove";

export default async function preloaderInit() {
  try {
    await preloaderCreate();
    await setPreloaderColor();
    await setCounterColor();
    await preloaderOpen();
    await preloaderCounter(1500);
    await preloaderClose();
    await preloaderRemove();
  } catch (err) {
    console.error(err);
  }
}
