def diff_two_arrays(nums1, nums2)
  a, b = nums1.uniq, nums2.uniq
  [a-b, b-a]
end

n_1 = [1,2,3]
m_1 = [2,4,6]

p diff_two_arrays(n_1, m_1)