f = open('/sys/class/net/usb0/statistics/tx_packets')
while True:
    value = f.read()
    print value
    f.seek(0)
