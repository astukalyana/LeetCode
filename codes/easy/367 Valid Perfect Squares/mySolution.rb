# @param {Integer} num
# @return {Boolean}
def is_perfect_square(num)
    current = 1

    while(current*current <= num)
        if(current*current == num) then return true
        end
        current += 1
    end

    return false
end