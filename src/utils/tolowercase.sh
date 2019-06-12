for SRC in `find ./src -depth`
do
    DST=`dirname "${SRC}"`/`basename "${SRC}" | tr '[A-Z]' '[a-z]'`
    if [ "${SRC}" != "${DST}" ]
    then
        (git mv "${SRC}" "${DST}.renametmp" && git mv "${DST}.renametmp" "${DST}") || echo "${SRC} was not renamed"
    fi
done
