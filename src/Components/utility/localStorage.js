const getAddedDonation = () => {
    const storedAddedDonation = localStorage.getItem('donation');
    if(storedAddedDonation){
        return JSON.parse(storedAddedDonation);
   } return [];
}

const saveAddedDonation = id => {
    const storedAddedDonations = getAddedDonation();
    const exists = storedAddedDonations?.data?.find(donationId => donationId == id);
    if(!exists){
        storedAddedDonations.push(id);
        localStorage.setItem('donation', JSON.stringify(storedAddedDonations))
    }

}

export {getAddedDonation, saveAddedDonation}