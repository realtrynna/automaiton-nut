import { mouse, Point, straightTo, Key, keyboard, Button } from "@nut-tree/nut-js";

(async () => {
    const currentPosition = await mouse.getPosition();

    // console.log(currentPosition);

    const target = new Point(19, 86);

    await mouse.move(straightTo(target));

    await mouse.click(Button.LEFT);

    const target2 = new Point(670, 185);

    await mouse.move(straightTo(target2));

    await mouse.click(Button.LEFT);

    await keyboard.pressKey(Key.LeftSuper, Key.E);
})();