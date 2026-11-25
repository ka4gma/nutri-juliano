import sys
from PIL import Image
src, prefix, step = sys.argv[1], sys.argv[2], int(sys.argv[3])
i = Image.open(src); w, h = i.size; n = 0
for y in range(0, h, step):
    i.crop((0, y, w, min(h, y + step))).save(f"{prefix}-{n:02d}.png"); n += 1
print(w, h, n)
