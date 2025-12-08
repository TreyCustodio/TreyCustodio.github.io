#   Computer Networks Physical Layer

##  Code Division Multiple Action
- unique code assigned to each user
- users share same frequency, but has their own chipping sequence to encode data
- if dot product is equal to 0, then the two codes (vectors) are orthogonal

### Chipping Sequence
- need a way to ensure that data is sent on the common shared channel on the same frequency without any interference

### Encoding (Sender)
- inner product: (original data) X (chipping sequence)

### Decoding (Receiver)
- 

### Example
Size = 7 <br>
M = 1, 1, -1, -1, -1, -1, 1 <br>
d = 1 <br>
What is the encoded output? <br>
- multiply d by chipping sequence
- thus output = M * d = 1, 1, -1, -1, -1, 1
<br>

What is d if M = -1, -1, 1, 1, 1, 1, -1 ? <br>
- the bits are flipped, so d = -1



##  4G/5G
- Cell: the area covered by a cell tower
- Regions with access to cellular networks are divided by cells
- Cells are hexagonal
- Area covered by cell towers varies by need
- Pico cell: 10m - 100m
    - better data rates for a small region
- User moving from one cell to another needs to connect to another base station


#   Mobility
##  4G/5G Networks (cellular)
- wireless link layer gives challenges
    - how to identify the sender
    - issue of mobility: proximity to carrier is important
- authentication
    - prior to connecting, the user must identify and authenticate themselves
- similar protocols used to wired; still a core and edge; quite similar to wired in terms of use case

###  Gateways connect networks to other networks

##  Home Subscriber Sevice
- store info about connected mobile devices

### Serving Gateway (S-GW)
- 
### PDN Gateway (P-GW)
- gateway to mobile cellular network
- provides NAT services
- tunneling

### Mobility Management Entity
- manage mobile devices, hands devices over between cells, tunneling from device to P-GW
- handles device authentication

##  LTE Data plane
- Base Station broadcasts signal every 5 ms on all frequencies
- simultaneous broadcasts of synch signals from base stations
- mobile finds the synch signal
    - finds info broadcast by BS and uses it to select which BS to connect to
- mobile selects which BS to associate with
- authentication, state establishment occurs

##  Sleep Mode
- sleep mode used to conserve battery and resources
### Light Sleep
- after 100 msec of inactivity
- wake up every 100 msec to check for downstream transmissions
### Deep Sleep
- after 5-10 secs of inactivity