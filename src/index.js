module.exports = function toReadable(number) {
    let units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let el = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];

    let array = String(number).split('');
    let read = [];

    switch (array.length) {
        case 1:
            if (array[0] == '0') {
                read.push('zero');
            } else {
                for (let i = 0; i <= units.length; i++) {
                    if (array[0] == String(i)) {
                        read.push(units[i - 1]);
                    }
                }

            }

            break;
        case 2:
            if (array[0] == '1') {
                for (let i = 0; i <= 9; i++) {
                    if (array[1] == String(i)) {
                        read.push(el[i]);
                    }
                }
            } else {
                for (let j = 0; j <= 9; j++) {
                    if (array[0] == String(j)) {
                        read.push(dozens[j - 2]);
                    }
                }

                if (array[1] == '0') {
                } else {
                    for (let k = 0; k <= 9; k++) {
                        if (array[1] == String(k)) {
                            read.push(' ' + units[k - 1]);
                        }
                    }
                }
            }
            break;
        case 3:
            if (array[0] == '1' && array[1] == '0' && array[2] == '0') {
                read.push('one ' + dozens[8]);
            } else {
                for (let i = 0; i <= 9; i++) {
                    if (array[0] == String(i)) {
                        read.push(units[i - 1] + ' hundred');
                    }
                }

                if (array[1] == '1') {
                    for (let j = 0; j <= 9; j++) {
                        if (array[2] == String(j)) {
                            read.push(' ' + el[j]);
                        }
                    }
                } else {
                    for (let k = 0; k <= 9; k++) {
                        if (array[1] == '0') {
                        } else if (array[1] == String(k)) {
                            read.push(' ' + dozens[k - 2]);
                        }
                    }
                    if (array[2] == '0') {
                    } else {
                        for (let m = 0; m <= 9; m++) {
                            if (array[2] == String(m)) {
                                read.push(' ' + units[m - 1]);
                            }
                        }
                    }
                }
            }
    }

    return read.join('');
}
